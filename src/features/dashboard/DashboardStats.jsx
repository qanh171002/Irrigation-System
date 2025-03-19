import {
  HiArrowTrendingDown,
  HiArrowTrendingUp,
  HiOutlineCloud,
  HiOutlineEyeDropper,
  HiOutlineReceiptPercent,
} from "react-icons/hi2";
import Stat from "../../ui/Stat";
import { useSensor } from "../../hooks/useSensor";

function Stats() {
  const { sensorData } = useSensor();

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
        value={sensorData.moistureThresholdLow + "%"}
      />
      <Stat
        title="High moisture"
        color="yellow"
        icon={<HiArrowTrendingUp />}
        value={sensorData.moistureThresholdHigh + "%"}
      />
    </>
  );
}

export default Stats;
