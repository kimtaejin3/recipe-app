import { GrFormPrevious } from "react-icons/gr";
import Food from "../assets/foodCover.png";
import PorkIcon from "../assets/pork.svg";
import MikeIcon from "../assets/mike.svg";
import Rating from "../assets/rating.svg";

import { IoIosTime } from "react-icons/io";
import { IoPeople } from "react-icons/io5";
import { PiStepsFill } from "react-icons/pi";

export default function Recipe() {
  return (
    <div className="pb-10">
      <div className="relative">
        <div className="relative aspect-[1.4/1] bg-red-100">
          <header className="absolute py-3 px-3">
            <div className="flex items-center justify-between">
              <div className="bg-white w-6 h-6 rounded-full flex items-center justify-center cursor-pointer">
                <GrFormPrevious size={20} />
              </div>
            </div>
          </header>
          <img className="w-full h-full" src={Food} alt="food" />
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
        <div>
          <h1 className="text-[20px] font-bold">미역국</h1>
          <img className="my-2" src={Rating} alt="임시 레이팅" />
        </div>
        <div>
          미역국 끓이는 거 어렵지 않습니다! 집에서 쉽게 만들 수 있는 미역국!
          가족, 친구 생일에 직접 끓여보세요~
        </div>
        <ul className="mt-8 flex justify-center gap-[15px]">
          <li className="bg-[#EB3830] w-[90px] rounded-md flex flex-col gap-3 items-center py-6 text-white">
            <PiStepsFill size={25} />
            <span>쉬움</span>
          </li>
          <li className="bg-[#EB3830] w-[90px] rounded-md flex flex-col gap-3 items-center py-6 text-white">
            <IoIosTime size={25} />
            <span>1시간 이내</span>
          </li>
          <li className="bg-[#EB3830] w-[90px] rounded-md flex flex-col gap-3 items-center py-6 text-white">
            <IoPeople size={25} />
            <span>2인분</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
