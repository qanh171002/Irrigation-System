import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";

function Header() {
  return (
    <header className="bg-white px-[4.8rem] py-[1.2rem] border-b border-gray-100 flex items-center gap-6 justify-end">
      <UserAvatar />
      <HeaderMenu />
    </header>
  );
}

export default Header;
