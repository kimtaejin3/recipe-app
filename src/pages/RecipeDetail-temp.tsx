import Food from "../assets/foodCover.png";
import { GrFormPrevious } from "react-icons/gr";

export default function RecipeDetail() {
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
        <img src={Food} alt="food" />
      </div>
      <div className="p-3">
        <div className="mt-8">
          <div>
            <h2 className="text-[18px] font-semibold mb-2">재료</h2>
            <div className="flex flex-col gap-[5px]">
              <div className="flex gap-[100px] items-center">
                <div className="w-[100px]">오이</div>
                <div>2개</div>
              </div>
              <div className="flex gap-[100px] items-center">
                <div className="w-[100px]">양파</div>
                <div>1/2개</div>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-[18px] font-semibold mb-2">양념</h2>
            <div className="flex flex-col gap-[5px]">
              <div className="flex gap-[100px] items-center">
                <div className="w-[100px]">오이</div>
                <div>2개</div>
              </div>
              <div className="flex gap-[100px] items-center">
                <div className="w-[100px]">양파</div>
                <div>1/2개</div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-[18px] font-semibold mb-2">요리순서</h2>
            <div className="flex flex-col gap-4">
              <div>
                <h3>1</h3>
                <div className="flex gap-5">
                  <div className="w-32 h-32 bg-red-300 shrink-0"></div>
                  <p className="text-[13px]">
                    오이를 손질합니다. 이를 손질합니다이를 손질합니다이를
                    손질합니다이를 손질합니다이를 손질합니다이를 손질합니다이를
                    손질합니다이를 손질합니다손질합니다이를
                    손질합니다손질합니다이를 손질합니다손질합니다이를
                    손질합니다손질합니다이를 손질합니다
                  </p>
                </div>
              </div>
              <div>
                <h3>1</h3>
                <div className="flex gap-5">
                  <div className="w-32 h-32 bg-red-300 shrink-0"></div>
                  <p className="text-[13px]">
                    오이를 손질합니다. 이를 손질합니다이를 손질합니다이를
                    손질합니다이를 손질합니다이를 손질합니다이를 손질합니다이를
                    손질합니다이를 손질합니다손질합니다이를
                    손질합니다손질합니다이를 손질합니다손질합니다이를
                    손질합니다손질합니다이를 손질합니다
                  </p>
                </div>
              </div>
              <div>
                <h3>1</h3>
                <div className="flex gap-5">
                  <div className="w-32 h-32 bg-red-300 shrink-0"></div>
                  <p className="text-[13px]">
                    오이를 손질합니다. 이를 손질합니다이를 손질합니다이를
                    손질합니다이를 손질합니다이를 손질합니다이를 손질합니다이를
                    손질합니다이를 손질합니다손질합니다이를
                    손질합니다손질합니다이를 손질합니다손질합니다이를
                    손질합니다손질합니다이를 손질합니다
                  </p>
                </div>
              </div>
              <div>
                <h3>1</h3>
                <div className="flex gap-5">
                  <div className="w-32 h-32 bg-red-300 shrink-0"></div>
                  <p className="text-[13px]">
                    오이를 손질합니다. 이를 손질합니다이를 손질합니다이를
                    손질합니다이를 손질합니다이를 손질합니다이를 손질합니다이를
                    손질합니다이를 손질합니다손질합니다이를
                    손질합니다손질합니다이를 손질합니다손질합니다이를
                    손질합니다손질합니다이를 손질합니다dk
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-[18px] font-semibold mb-2">요리팁</h2>
            <p>
              튀김을 익힐때 처음부터 너무 쎈온도로 하게되면 맛이 없어집니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
