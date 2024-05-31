import { Link, Outlet } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { BiSolidBookmarks } from "react-icons/bi";
import { FaUser } from "react-icons/fa";

export default function Layout() {
  return (
    <div className="max-w-sm bg-[#F7F9FC] mx-auto min-h-svh">
      <Outlet />

      <ul className=" text-[12px] max-w-sm mx-auto flex justify-between fixed bottom-0 left-0 right-0  p-6 bg-[#f8f8f8]">
        <li>
          <Link to="/">
            <div className="text-[#EB4F30] flex flex-col items-center gap-1">
              <HiHome size={18} />
              <span>홈</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/">
            <div className="text-[#8F9BB3] flex flex-col items-center gap-1">
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
