import Button from "../ui/Button";

function Settings() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-display text-2xl font-semibold text-neutral-900">
            Settings
          </h2>
          <p className="text-sm text-neutral-500">Configure your settings</p>
        </div>
      </div>
      <div className="rounded-2xl border border-neutral-200 bg-white p-8">
        <form className="mx-auto my-12 flex max-w-[80%] flex-col gap-8">
          <div className="grid grid-cols-[240px_600px] items-center gap-4">
            <label className="text-base font-medium text-neutral-700">
              Watering mode
            </label>
            <select className="focus:border-primary-500 focus:ring-primary-100 rounded-lg border border-neutral-200 bg-white px-4 py-2.5 text-base text-neutral-700 focus:ring-2 focus:outline-none">
              <option value="manual">Manual</option>
              <option value="automatic">Automatic</option>
            </select>
          </div>

          <div className="grid grid-cols-[240px_600px] items-center gap-4">
            <label className="text-base font-medium text-neutral-700">
              Low soil moisture threshold
            </label>
            <input
              type="number"
              defaultValue="15"
              className="focus:border-primary-500 focus:ring-primary-100 w-full rounded-lg border border-neutral-200 bg-white px-4 py-2.5 text-base text-neutral-700 focus:ring-2 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-[240px_600px] items-center gap-4">
            <label className="text-base font-medium text-neutral-700">
              High soil moisture threshold
            </label>
            <input
              type="number"
              defaultValue="40"
              className="focus:border-primary-500 focus:ring-primary-100 w-full rounded-lg border border-neutral-200 bg-white px-4 py-2.5 text-base text-neutral-700 focus:ring-2 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-[240px_600px] items-center gap-4">
            <label className="text-base font-medium text-neutral-700">
              Watering time configuration
            </label>
            <input
              type="text"
              defaultValue="3 hours"
              className="focus:border-primary-500 focus:ring-primary-100 w-full rounded-lg border border-neutral-200 bg-white px-4 py-2.5 text-base text-neutral-700 focus:ring-2 focus:outline-none"
            />
          </div>

          <div className="mt-4 flex justify-end gap-3">
            <Button variation="secondary">Cancel</Button>
            <Button>Save</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Settings;
