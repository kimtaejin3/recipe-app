export default function Saurce() {
  return (
    <>
      <input
        className="w-full p-2 rounded-md mt-2 border-none outline-none focus:outline-[#f2766f] transition-all duration-300"
        type="text"
        placeholder="양념이름"
      />
      <div className="mt-4 flex flex-col gap-1">
        <input
          className="w-full p-2 rounded-md mt-2 border-none outline-none focus:outline-[#f2766f] transition-all duration-300"
          type="text"
          placeholder="예) 2 (큰술)"
        />
      </div>
      <div>
        <button className="bg-[#cbd5e1] mt-4 py-1 px-4 text-[12px] rounded-md">
          확인
        </button>
      </div>
    </>
  );
}
