import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="max-w-sm bg-[#F7F9FC] mx-auto min-h-svh">
      <Outlet />
    </div>
  );
}
