import ControlButton from "./ControlButton";
import ControlStats from "./ControlStats";
function ControlLayout() {
    return (
        <div className="grid grid-cols-3 grid-rows-[auto_34rem] gap-6">
            <ControlStats />
            <ControlButton />
        </div>
    )
}

export default ControlLayout
