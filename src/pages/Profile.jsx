import { useState } from "react";
import Button from "../ui/Button";

function Profile() {
  const [userData, setUserData] = useState({
    email: "demo@email.com",
    fullName: "Yoko Pottie",
    avatar: null,
  });

  return (
    <div className="flex flex-col gap-2">
      <div className="relative">
        <div className="bg-primary-500 h-48 rounded-xl">
          <div className="absolute bottom-6 left-8 flex items-center gap-6">
            <div className="h-24 w-24 overflow-hidden rounded-lg border-4 border-white bg-white">
              <img
                src={userData.avatar || "/default-avatar.png"}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <h1 className="text-2xl font-semibold text-white">
              {userData.fullName}
            </h1>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-neutral-200 bg-white p-8">
        <h2 className="mb-8 text-xl font-semibold text-neutral-800">
          Update User Data
        </h2>

        <form className="space-y-6">
          <div className="grid grid-cols-[120px_1fr] items-center gap-8">
            <label className="text-sm font-medium text-neutral-700">
              Email address
            </label>
            <input
              type="email"
              value={userData.email}
              className="focus:border-primary-500 focus:ring-primary-100 w-80 rounded-lg border border-neutral-200 px-4 py-2 text-sm text-neutral-700 focus:ring-2 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-[120px_1fr] items-center gap-8">
            <label className="text-sm font-medium text-neutral-700">
              Full name
            </label>
            <input
              type="text"
              value={userData.fullName}
              className="focus:border-primary-500 focus:ring-primary-100 w-80 rounded-lg border border-neutral-200 px-4 py-2 text-sm text-neutral-700 focus:ring-2 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-[120px_1fr] items-center gap-8">
            <label className="text-sm font-medium text-neutral-700">
              Avatar Image
            </label>
            <div>
              <Button variation="secondary" size="small" className="w-24">
                Choose file
              </Button>
              <span className="ml-4 text-sm text-neutral-500">
                No file chosen
              </span>
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <Button variation="secondary">Cancel</Button>
            <Button>Update</Button>
          </div>
        </form>
      </div>

      <div className="rounded-xl border border-neutral-200 bg-white p-8">
        <h2 className="mb-8 text-xl font-semibold text-neutral-800">
          Update Password
        </h2>

        <form className="space-y-6">
          <div className="grid grid-cols-[120px_1fr] items-center gap-8">
            <label className="text-sm font-medium text-neutral-700">
              New password
            </label>
            <input
              type="password"
              className="focus:border-primary-500 focus:ring-primary-100 w-80 rounded-lg border border-neutral-200 px-4 py-2 text-sm text-neutral-700 focus:ring-2 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-[120px_1fr] items-center gap-8">
            <label className="text-sm font-medium text-neutral-700">
              Confirm password
            </label>
            <input
              type="password"
              className="focus:border-primary-500 focus:ring-primary-100 w-80 rounded-lg border border-neutral-200 px-4 py-2 text-sm text-neutral-700 focus:ring-2 focus:outline-none"
            />
          </div>

          <div className="flex justify-end gap-4">
            <Button variation="secondary">Cancel</Button>
            <Button>Update</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Profile;
