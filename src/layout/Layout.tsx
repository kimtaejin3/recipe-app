import { Link, Outlet, useLocation } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { BiSolidBookmarks } from "react-icons/bi";
import { FaUser } from "react-icons/fa";

// bg-[#F7F9FC]
export default function Layout() {
  const { pathname } = useLocation();
  
  return (
    <div className="max-w-sm bg-[#F7F9FC] mx-auto min-h-[92vh] pb-[8vh]">
      <Outlet />

      <ul className="items-center text-[12px] z-[9999] max-w-sm mx-auto flex justify-between fixed bottom-0 left-0 right-0 px-10 bg-[#f8f8f8] h-[8vh]">
        <li>
          <Link to="/">
            <div className={`text-[#8F9BB3] flex flex-col items-center gap-1 ${pathname === "/" && "text-[#EB4F30] ]"}`}>
              <HiHome size={18} />
              <span>홈</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/controls">
            <div className={`text-[#8F9BB3] flex flex-col items-center gap-1 ${pathname === "/controls" && "text-[#EB4F30] ]"}`}>
              <BiSolidBookmarks size={18} />
              <span>레시피</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/">
            <div className="text-[#8F9BB3] flex flex-col items-center gap-1">
              <FaUser size={18} />
              <span>프로필</span>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}
