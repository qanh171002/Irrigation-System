import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="grid h-screen grid-cols-[18rem_1fr] grid-rows-[auto_1fr]">
      <Header />
      <Sidebar />
      <main className="scrollbar-hide overflow-auto bg-gray-50 px-[4.8rem] pt-16 pb-[6.4rem]">
        <div className="mx-auto flex max-w-7xl flex-col gap-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
