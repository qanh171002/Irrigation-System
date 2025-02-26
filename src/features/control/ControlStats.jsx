import { HiOutlineBeaker, HiOutlineClock, HiOutlineReceiptPercent } from "react-icons/hi2";
import Stat from "../../ui/Stat";

function Stats() {
        return (
            <>
              <Stat
                title="Running time"
                color="green"
                icon={<HiOutlineClock />}
                value={20 + '%'}
              />
        
              <Stat
                title="Water used"
                color="blue"
                icon={<HiOutlineBeaker />}
                value={29 + '%'}
              />
              <Stat
                title="Current soil moisture"
                color="yellow"
                icon={<HiOutlineReceiptPercent />}
                value={'ON'}
              />
            </>
          );
}

export default Stats
