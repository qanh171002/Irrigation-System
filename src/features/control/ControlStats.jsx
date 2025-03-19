import { HiArrowsRightLeft, HiOutlineClock } from "react-icons/hi2";
import Stat from "../../ui/Stat";
import { useSensor } from "../../hooks/useSensor";

function Stats() {
  const { sensorData } = useSensor();
  return (
    <>
      <Stat
        title="Pump state"
        color="green"
        icon={<HiOutlineClock />}
        value={sensorData.pumpState === 1 ? "Running" : "Not running"}
      />

      <Stat
        title="Pump mode"
        color="blue"
        icon={<HiArrowsRightLeft />}
        value={sensorData.pumpMode === 1 ? "Auto" : "Manual"}
      />
    </>
  );
}

export default Stats;
