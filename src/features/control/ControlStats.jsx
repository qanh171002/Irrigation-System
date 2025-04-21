import { useEffect, useState } from "react";
import { HiArrowsRightLeft, HiOutlineClock } from "react-icons/hi2";
import Stat from "../../ui/Stat";
import { BASE_URL } from "../../utils/constants";
import SpinnerMini from "../../ui/SpinnerMini";

function Stats() {
  const [pumpState, setPumpState] = useState(null);
  const [pumpMode, setPumpMode] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPumpData = async () => {
      try {
        const token = localStorage.getItem("access_token");
        if (!token) {
          return;
        }

        const headers = {
          Authorization: `Bearer ${token}`,
        };

        setLoading(true);
        const [stateRes, modeRes] = await Promise.all([
          fetch(`${BASE_URL}/devices/pump_state`, { headers }),
          fetch(`${BASE_URL}/devices/pump_mode`, { headers }),
        ]);

        if (!stateRes.ok || !modeRes.ok) {
          throw new Error("Failed to fetch pump data");
        }

        const stateData = await stateRes.json();
        const modeData = await modeRes.json();
        setPumpState(stateData.result);
        setPumpMode(modeData.result);
      } catch (error) {
        console.error("Error fetching pump data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPumpData();
  }, []);

  return (
    <>
      <Stat
        title="Pump state"
        color="green"
        icon={<HiOutlineClock />}
        value={
          loading ? (
            <div className="justify-left flex items-center">
              <SpinnerMini />
            </div>
          ) : pumpState === null ? (
            "Loading..."
          ) : pumpState === true ? (
            "Running"
          ) : (
            "Not running"
          )
        }
      />

      <Stat
        title="Pump mode"
        color="blue"
        icon={<HiArrowsRightLeft />}
        value={
          loading ? (
            <div className="justify-left flex items-center">
              <SpinnerMini />
            </div>
          ) : pumpMode === null ? (
            "Loading..."
          ) : pumpMode === true ? (
            "Auto"
          ) : (
            "Manual"
          )
        }
      />
    </>
  );
}

export default Stats;
