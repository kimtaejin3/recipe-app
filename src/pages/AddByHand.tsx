import { useState } from "react";
import { FaCameraRetro } from "react-icons/fa6";
import ScrollBtn from "../components/ScrollBtn";

export default function AddByHand() {
  const [step, setStep] = useState(1);

  const handleStepUpClick = () => {
    setStep((prevStep) => prevStep + 1);
  };

  return (
    <div className="p-5">
      <div className="flex gap-5 ">
        <h1
          style={{ color: "#EB3830", fontSize: "19px" }}
          className=" font-semibold"
        >
          레시피 직접 작성하기
        </h1>
      </div>
      <form>
        {step > 0 && (
          <div className="mt-4">
            <button className="block mt-7 mb-10 mx-auto w-[150px] h-[150px] bg-slate-300 rounded-md">
              <div className=" text-[13px] flex flex-col items-center justify-center gap-3">
                <FaCameraRetro size={40} />
                요리 대표 사진을
                <br /> 등록해 주세요.
              </div>
            </button>
          </div>
        )}

        {step > 1 && (
          <div className="mt-4">
            <label className="block">레시피 제목</label>
            <input
              className="w-full p-2 rounded-md mt-2 border-none outline-none focus:outline-[#f2766f] transition-all duration-300"
              type="text"
              placeholder="예) 소고기 미역국 끓이기"
            />
          </div>
        )}
        {step > 2 && (
          <div className="mt-4">
            <label className="block">요리소개</label>
            <textarea className="w-full p-2 outline-none rounded-md resize-none mt-2  focus:outline-[#f2766f] transition-all duration-300"></textarea>
          </div>
        )}

        {step > 3 && (
          <div className="mt-4">
            <label>요리정보</label>
            <div className="flex gap-4 mt-2">
              <label className="items-center basis-16">인원</label>
              <select className="w-full p-2 outline-none rounded-md focus:outline-[#f2766f] transition-all duration-300">
                <option>인원</option>
                <option>1인분</option>
                <option>2인분</option>
                <option>3인분</option>
                <option>4인분</option>
                <option>5인분</option>
                <option>6인분 이상</option>
              </select>
            </div>
            <div className="flex gap-4 my-4">
              <label className="items-center basis-16">시간</label>
              <select className="w-full p-2 outline-none rounded-md focus:outline-[#f2766f] transition-all duration-300">
                <option>시간</option>
                <option>5분 이내</option>
                <option>10분 이내</option>
                <option>15분 이내</option>
                <option>20분 이내</option>
                <option>30분 이내</option>
                <option>60분 이내</option>
                <option>90분 이내</option>
                <option>2시간 이내</option>
                <option>2시간 이상</option>
              </select>
            </div>
            <div className="flex gap-4">
              <label className="basis-16">난이도</label>
              <select className="w-full p-2 outline-none rounded-md focus:outline-[#f2766f] transition-all duration-300">
                <option>난이도</option>
                <option>초급</option>
                <option>중급</option>
                <option>고급</option>
                <option>신의경지</option>
              </select>
            </div>
          </div>
        )}
      </form>
      <div className="flex gap-7 mt-4">
        <button className="flex gap-2" onClick={handleStepUpClick}>
          <span>완료 했어요!</span>
          <ScrollBtn />
        </button>
        <button className="flex gap-2" onClick={handleStepUpClick}>
          <span>넘어갈래요!</span>
          <ScrollBtn />
        </button>
      </div>
    </div>
  );
}
