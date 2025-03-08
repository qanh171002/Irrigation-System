import Button from "../../ui/Button";

function ControlButton() {
    return (
        <div className="bg-white w-full col-span-3 p-6 rounded-md flex flex-col items-center justify-center border border-gray-100 gap-10">
            <div className="flex w-full justify-center gap-4">
                <Button size="xlarge">ON</Button>
                <Button variation="secondary" size="xlarge">OFF</Button>
            </div>
            <p className="text-gray-600 text-lg font-medium">
                The water pump is currently <span className="font-semibold">ON</span>. Press the <span className="font-semibold">OFF</span> button to turn it off.
            </p>
        </div>
    );
}

export default ControlButton;
