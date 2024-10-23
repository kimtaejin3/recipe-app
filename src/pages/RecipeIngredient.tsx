import { FaBasketShopping } from "react-icons/fa6";

export default function RecipeIngredient() {
  return (
    <>
      <div>
        <h1 className=" text-center py-4 pb-8 font-bold text-[18px]">재료</h1>
        <ul className="flex flex-col gap-8">
          <li className="flex justify-between">
            <div className="flex items-center gap-2">
              <FaBasketShopping color={"#ea4e30"} />
              <span className="text-[17px]">미역</span>
            </div>
            <span>1/3컵 10g</span>
          </li>
          <li className="flex justify-between">
            <div className="flex items-center gap-2">
              <FaBasketShopping color={"#ea4e30"} />
              <span className="text-[17px]">소고기 (양지)</span>
            </div>
            <span>1/3컵 10g</span>
          </li>
          <li className="flex justify-between">
            <div className="flex items-center gap-2">
              <FaBasketShopping color={"#ea4e30"} />
              <span className="text-[17px]">참기름</span>
            </div>
            <span>1/3컵 10g</span>
          </li>
          <li className="flex justify-between">
            <div className="flex items-center gap-2">
              <FaBasketShopping color={"#ea4e30"} />
              <span className="text-[17px]">국간장</span>
            </div>
            <span>1/3컵 10g</span>
          </li>
          <li className="flex justify-between">
            <div className="flex items-center gap-2">
              <FaBasketShopping color={"#ea4e30"} />
              <span className="text-[17px]">다진마늘</span>
            </div>
            <span>1/3컵 10g</span>
          </li>
          <li className="flex justify-between">
            <div className="flex items-center gap-2">
              <FaBasketShopping color={"#ea4e30"} />
              <span className="text-[17px]">멸치액젓</span>
            </div>
            <span>1/3컵 10g</span>
          </li>
        </ul>

        <div className="mt-[50px] flex items-center justify-center gap-4">
          <button className="border-[#EB4F30] border-2 border-solid rounded-[20px] py-2 px-[50px]">
            이전단계
          </button>
          <button className="bg-[#EB4F30] rounded-[20px] py-2 px-[50px] text-white">
            다음단계
          </button>
        </div>
      </div>
    </>
  );
}
