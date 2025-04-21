import { getUserRole } from "../../utils/getUserRole";

function UserAvatar() {
  const role = getUserRole();
  return (
    <div className="flex items-center gap-3 text-sm font-medium text-gray-600">
      <span>{role}</span>
    </div>
  );
}

export default UserAvatar;
