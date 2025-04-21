import { useEffect, useState } from "react";
import Button from "../../ui/Button";
import { BASE_URL } from "../../utils/constants";
import Spinner from "../../ui/Spinner";

function ControlButton() {
  const [isPumpOn, setIsPumpOn] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPumpStatus = async () => {
      try {
        const token = localStorage.getItem("access_token");
        const res = await fetch(`${BASE_URL}/devices/relay_to_pump`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        setIsPumpOn(data.result);
      } catch (err) {
        console.error("Failed to fetch pump status:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPumpStatus();
  }, []);

  const handlePumpToggle = async (turnOn) => {
    try {
      setLoading(true);
      const token = localStorage.getItem("access_token");

      const res = await fetch(`${BASE_URL}/devices/relay_to_pump`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ relayToPump: turnOn ? 1 : 0 }),
      });

      if (!res.ok) throw new Error("Failed to update pump state");

      setIsPumpOn(turnOn);
    } catch (err) {
      console.error("Error updating pump state:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="col-span-2 flex w-full flex-col items-center justify-center gap-10 rounded-md border border-neutral-200 bg-white p-6">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="flex w-full justify-center gap-4">
            <Button
              size="xlarge"
              variation={isPumpOn ? "primary" : "secondary"}
              disabled={loading || isPumpOn}
              onClick={() => handlePumpToggle(true)}
            >
              ON
            </Button>
            <Button
              size="xlarge"
              variation={!isPumpOn ? "primary" : "secondary"}
              disabled={loading || !isPumpOn}
              onClick={() => handlePumpToggle(false)}
            >
              OFF
            </Button>
          </div>
          <p className="text-lg font-medium text-gray-600">
            The water pump is currently{" "}
            <span className="font-semibold">
              {isPumpOn === null ? "..." : isPumpOn ? "ON" : "OFF"}
            </span>
            . Press the{" "}
            <span className="font-semibold">{isPumpOn ? "OFF" : "ON"}</span>{" "}
            button to turn it {isPumpOn ? "off" : "on"}.
          </p>
        </>
      )}
    </div>
  );
}

export default ControlButton;
