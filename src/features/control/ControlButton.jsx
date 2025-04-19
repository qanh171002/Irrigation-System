import Button from "../../ui/Button";

function ControlButton() {
  return (
    <div className="col-span-2 flex w-full flex-col items-center justify-center gap-10 rounded-md border border-neutral-200 bg-white p-6">
      <div className="flex w-full justify-center gap-4">
        <Button size="xlarge">ON</Button>
        <Button variation="secondary" size="xlarge">
          OFF
        </Button>
      </div>
      <p className="text-lg font-medium text-gray-600">
        The water pump is currently <span className="font-semibold">ON</span>.
        Press the <span className="font-semibold">OFF</span> button to turn it
        off.
      </p>
    </div>
  );
}

export default ControlButton;
