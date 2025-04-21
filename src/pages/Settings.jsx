import { useEffect, useState } from "react";
import Button from "../ui/Button";
import { BASE_URL } from "../utils/constants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "../ui/Spinner";

function Settings() {
  const [mode, setMode] = useState("manual");
  const [lowThreshold, setLowThreshold] = useState(null);
  const [highThreshold, setHighThreshold] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const token = localStorage.getItem("access_token");

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const headers = { Authorization: `Bearer ${token}` };

        const [modeRes, lowRes, highRes] = await Promise.all([
          fetch(`${BASE_URL}/devices/pump_mode`, { headers }),
          fetch(`${BASE_URL}/devices/soil_moisture_threshold_low`, { headers }),
          fetch(`${BASE_URL}/devices/soil_moisture_threshold_high`, {
            headers,
          }),
        ]);

        const [modeData, lowData, highData] = await Promise.all([
          modeRes.json(),
          lowRes.json(),
          highRes.json(),
        ]);

        setMode(modeData.result === true ? "automatic" : "manual");
        setLowThreshold(lowData.result);
        setHighThreshold(highData.result);
      } catch (err) {
        console.error("Error fetching settings:", err);
        toast.error("Failed to fetch settings");
      } finally {
        setIsLoading(false);
      }
    };

    fetchAll();
  }, [token]);

  const handleSave = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };

      await Promise.all([
        fetch(`${BASE_URL}/devices/pump_mode`, {
          method: "POST",
          headers,
          body: JSON.stringify({ mode: mode === "automatic" ? 1 : 0 }),
        }),
        fetch(`${BASE_URL}/devices/soil_moisture_threshold_low`, {
          method: "POST",
          headers,
          body: JSON.stringify({ threshold: Number(lowThreshold) }),
        }),
        fetch(`${BASE_URL}/devices/soil_moisture_threshold_high`, {
          method: "POST",
          headers,
          body: JSON.stringify({ threshold: Number(highThreshold) }),
        }),
      ]);

      toast.success("Saved successfully");
    } catch (err) {
      console.error("Error saving settings:", err);
      toast.error("Failed to save");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-display text-2xl font-semibold text-neutral-900">
            Settings
          </h2>
          <p className="text-sm text-neutral-500">Configure your settings</p>
        </div>
      </div>

      <div className="rounded-2xl border border-neutral-200 bg-white p-8">
        {isLoading ? (
          <div className="flex items-center justify-center">
            <Spinner />
          </div>
        ) : (
          <form
            onSubmit={handleSave}
            className="mx-auto my-12 flex max-w-[80%] flex-col gap-8"
          >
            <div className="grid grid-cols-[240px_600px] items-center gap-4">
              <label className="text-base font-medium text-neutral-700">
                Watering mode
              </label>
              <select
                value={mode}
                onChange={(e) => setMode(e.target.value)}
                className="focus:border-primary-500 focus:ring-primary-100 rounded-lg border border-neutral-200 bg-white px-4 py-2.5 text-base text-neutral-700 focus:ring-2 focus:outline-none"
                disabled={isLoading}
              >
                <option value="manual">Manual</option>
                <option value="automatic">Automatic</option>
              </select>
            </div>

            <div className="grid grid-cols-[240px_600px] items-center gap-4">
              <label className="text-base font-medium text-neutral-700">
                Low soil moisture threshold
              </label>
              <input
                type="number"
                value={lowThreshold !== null ? lowThreshold : ""}
                onChange={(e) => setLowThreshold(e.target.value)}
                className="focus:border-primary-500 focus:ring-primary-100 w-full rounded-lg border border-neutral-200 bg-white px-4 py-2.5 text-base text-neutral-700 focus:ring-2 focus:outline-none"
                disabled={isLoading}
              />
            </div>

            <div className="grid grid-cols-[240px_600px] items-center gap-4">
              <label className="text-base font-medium text-neutral-700">
                High soil moisture threshold
              </label>
              <input
                type="number"
                value={highThreshold !== null ? highThreshold : ""}
                onChange={(e) => setHighThreshold(e.target.value)}
                className="focus:border-primary-500 focus:ring-primary-100 w-full rounded-lg border border-neutral-200 bg-white px-4 py-2.5 text-base text-neutral-700 focus:ring-2 focus:outline-none"
                disabled={isLoading}
              />
            </div>

            <div className="mt-4 flex justify-end gap-3">
              <Button
                type="button"
                variation="secondary"
                onClick={() => window.location.reload()}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={loading || isLoading}>
                {loading ? "Saving..." : "Save"}
              </Button>
            </div>
          </form>
        )}
      </div>

      <ToastContainer style={{ fontSize: "14px" }} autoClose={3000} />
    </div>
  );
}

export default Settings;
