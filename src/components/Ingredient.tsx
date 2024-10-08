import { useState } from "react";

export default function Ingredient({ count }: { count: number }) {
  const [cnt, setCnt] = useState(1);

  return (
    <>
      {new Array(cnt).fill(0).map((_, index) => {
        return (
          <div
            className={`mt-4 pb-2 ${
              cnt > 1 && index != cnt - 1 && "border-b-2 pb-5"
            }`}
          >
            <input
              className="w-full p-2 rounded-md mt-2 border-none outline-none focus:outline-[#f2766f] transition-all duration-300"
              type="text"
              placeholder={`재료 이름`}
            />
            <div key={index} className="mt-4 flex flex-col gap-2">
              <input
                className="w-full p-2 rounded-md mt-2 border-none outline-none focus:outline-[#f2766f] transition-all duration-300"
                type="text"
                placeholder="예) 10 (수량)"
              />
              <input
                className="w-full p-2 rounded-md mt-2 border-none outline-none focus:outline-[#f2766f] transition-all duration-300"
                type="text"
                placeholder="예) g, ml"
              />
            </div>
          </div>
        );
      })}
      <div className="flex gap-2">
        <button
          className="bg-[#f2766f] text-white mt-2 rounded-md px-6"
          onClick={(e) => {
            e.preventDefault();
            setCnt((prevCnt) => prevCnt + 1);
          }}
        >
          +
        </button>
        <button
          className="bg-[#f2766f] text-white mt-2 rounded-md px-6"
          onClick={(e) => {
            e.preventDefault();
            if (cnt > 1) {
              setCnt((prevCnt) => prevCnt - 1);
            }
          }}
        >
          -
        </button>
      </div>
    </>
  );
}
