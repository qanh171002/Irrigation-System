import {
  HiOutlineArrowPath,
  HiOutlineCloud,
  HiOutlineEyeDropper,
  HiOutlineReceiptPercent,
} from "react-icons/hi2";
import Stat from "../../ui/Stat";
import { formatTemperature } from "../../utils/helpers";

function Stats() {
  return (
    <>
      <Stat
        title="Temperature"
        color="blue"
        icon={<HiOutlineEyeDropper />}
        value={formatTemperature(25)}
      />
      <Stat
        title="Humidity"
        color="green"
        icon={<HiOutlineCloud />}
        value={20 + "%"}
      />

      <Stat
        title="Soil moisture"
        color="red"
        icon={<HiOutlineReceiptPercent />}
        value={29 + "%"}
      />
      <Stat
        title="Pump status"
        color="yellow"
        icon={<HiOutlineArrowPath />}
        value={"ON"}
      />
    </>
  );
}

export default Stats;
