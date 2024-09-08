import Food from "../assets/foodCover.png";
import { GrFormPrevious } from "react-icons/gr";
import { IoMdPeople } from "react-icons/io";
import { IoIosTime } from "react-icons/io";
import { SiLevelsdotfyi } from "react-icons/si";

export default function RecipeDetail() {
  return (
    <div className="pb-10">
      <div className=" relative">
        <header className="bg-white absolute left-0 right-0 py-2 px-4 opacity-90 flex justify-between">
          <GrFormPrevious size={20} />
          <div className=" text-[13px]">맛있는 와타요업식 텐동 만들기</div>
        </header>
        <img src={Food} alt="food" />
      </div>
      <div className="p-3">
        <div className="flex justify-between text-[13px] pt-4 items-center">
          <div className="text-[#ea4e30]">레시피 소개</div>
          <div className="w-8 h-[2px]  border-t-2 border-[#ea4e30] border-dotted"></div>
          <div>재료정보</div>
          <div className="w-8 h-[2px]  border-t-2 border-[#ea4e30] border-dotted"></div>
          <div>요리순서</div>
          <div className="w-8 h-[2px]  border-t-2 border-[#ea4e30] border-dotted"></div>
          <div>요리팁</div>
        </div>

        <div className="mt-6">
          <p className="text-[15px]">
            와타요업 텐동은 꼬들꼬들한 밥에 바삭하고 영양가가 풍부한 튀김요리다
            들어가 있습니다 이 요리를 먹는다면 정말 좋은 기분을 가질 수 있을
            것입니다 만드는데는 좀 어려운 편에 속합니다.
          </p>
        </div>

        <div className="mt-4">
          <h2 className="text-[18px] font-semibold mb-2">정보</h2>
          <div className="flex flex-col gap-[5px]">
            <div className="flex gap-[100px] items-center">
              <div className="flex items-center gap-2  w-[100px]">
                <IoMdPeople />
                인원
              </div>
              <div>2명</div>
            </div>
            <div className="flex gap-[100px] items-center">
              <div className="flex items-center gap-2  w-[100px]">
                <IoIosTime />
                시간
              </div>
              <div>3시간 이상</div>
            </div>
            <div className="flex gap-[100px] items-center">
              <div className="flex items-center gap-2  w-[100px]">
                <SiLevelsdotfyi />
                난이도
              </div>
              <div>어려움</div>
            </div>
          </div>
        </div>

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
        </div>
      </div>
    </div>
  );
}
