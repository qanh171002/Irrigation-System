import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";

function Header() {
  return (
    <header className="flex items-center justify-end gap-6 border-b border-gray-100 bg-white px-[4.8rem] py-[1.2rem]">
      <UserAvatar />
      <HeaderMenu />
    </header>
  );
}

export default Header;
