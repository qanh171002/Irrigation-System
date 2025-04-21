import {
  HiArrowTrendingDown,
  HiArrowTrendingUp,
  HiOutlineCloud,
  HiOutlineEyeDropper,
  HiOutlineReceiptPercent,
} from "react-icons/hi2";
import Stat from "../../ui/Stat";
import { useSensor } from "../../hooks/useSensor";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../utils/constants";
import SpinnerMini from "../../ui/SpinnerMini";

function Stats() {
  const { sensorData } = useSensor();
  const [moistureThresholdLow, setMoistureThresholdLow] = useState(null);
  const [moistureThresholdHigh, setMoistureThresholdHigh] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMoistureThreshold = async () => {
      try {
        const token = localStorage.getItem("access_token");
        if (!token) {
          return;
        }
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        setLoading(true);
        const [lowRes, highRes] = await Promise.all([
          fetch(`${BASE_URL}/devices/soil_moisture_threshold_low`, { headers }),
          fetch(`${BASE_URL}/devices/soil_moisture_threshold_high`, {
            headers,
          }),
        ]);
        const lowData = await lowRes.json();
        const highData = await highRes.json();
        setMoistureThresholdLow(lowData.result);
        setMoistureThresholdHigh(highData.result);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getMoistureThreshold();
  }, []);

  return (
    <>
      <Stat
        title="Temperature"
        color="blue"
        icon={<HiOutlineEyeDropper />}
        value={sensorData.temperature + "°C"}
      />
      <Stat
        title="Humidity"
        color="green"
        icon={<HiOutlineCloud />}
        value={sensorData.humidity + "%"}
      />
      <Stat
        title="Soil moisture"
        color="red"
        icon={<HiOutlineReceiptPercent />}
        value={sensorData.soilMoisture + "%"}
      />

      <Stat
        title="Low moisture"
        color="gray"
        icon={<HiArrowTrendingDown />}
        value={
          loading ? (
            <div className="justify-left flex items-center">
              <SpinnerMini />
            </div>
          ) : moistureThresholdLow !== null ? (
            moistureThresholdLow
          ) : (
            "N/A"
          )
        }
      />
      <Stat
        title="High moisture"
        color="yellow"
        icon={<HiArrowTrendingUp />}
        value={
          loading ? (
            <div className="justify-left flex items-center">
              <SpinnerMini />
            </div>
          ) : moistureThresholdHigh !== null ? (
            moistureThresholdHigh
          ) : (
            "N/A"
          )
        }
      />
    </>
  );
}

export default Stats;
