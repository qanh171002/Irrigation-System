import Logo from "./Logo";
import MainNav from "./MainNav";

function Sidebar() {
  return (
    <aside className="bg-white p-8 border-r border-gray-100 flex flex-col gap-8 row-span-full">
      <Logo />
      <MainNav />
    </aside>
  );
}

export default Sidebar;
