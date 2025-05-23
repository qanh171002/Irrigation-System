import Logo from "./Logo";
import MainNav from "./MainNav";

function Sidebar() {
  return (
    <aside className="row-span-full flex flex-col gap-8 border-r border-neutral-200 bg-white p-8">
      <Logo />
      <MainNav />
    </aside>
  );
}

export default Sidebar;
