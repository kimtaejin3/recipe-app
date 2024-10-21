import { GrFormPrevious } from "react-icons/gr";
import Food from "../assets/foodCover.png";
import PorkIcon from "../assets/pork.svg";
import MikeIcon from "../assets/mike.svg";

export default function Recipe() {
  return (
    <div className="pb-10">
      <div className="relative">
        <header className="text-[#ea4e30] font-bold  py-2 px-4 ">
          <div className="flex items-center justify-between">
            <div className="bg-white w-6 h-6 rounded-full flex items-center justify-center cursor-pointer">
              <GrFormPrevious size={20} />
            </div>
            <div className=" bg-white p-2 rounded-md text-[13px]">
              맛있는 와타요업식 텐동 만들기
            </div>
          </div>
        </header>
        <div className="aspect-[1.4/1] bg-red-100">
          <img className="w-full h-full object-cover" src={Food} alt="food" />
        </div>
      </div>
      <div className="bg-[#F7F9FC] rounded-t-[20px] relative z-10 -top-7 px-5">
        <div className="py-4 flex justify-between">
          <div className="flex gap-2 shrink-0">
            <img src={PorkIcon} alt="pork_icon" />
            <span className="text-[16px] font-semibold tracking-[4px]">
              국/탕
            </span>
          </div>
          <button>
            <img src={MikeIcon} alt="mike_icon" />
          </button>
        </div>
        <div>...</div>
        <div>...</div>
        <div>...</div>
      </div>
    </div>
  );
}
