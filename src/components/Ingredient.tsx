export default function Ingredient({ count }: { count: number }) {
  return (
    <div className="mt-4">
      <input
        className="w-full p-2 rounded-md mt-2 border-none outline-none focus:outline-[#f2766f] transition-all duration-300"
        type="text"
        placeholder={`재료 ${count}`}
      />
      <div className="mt-4 flex flex-col gap-2">
        <input
          className="w-full p-2 rounded-md mt-2 border-none outline-none focus:outline-[#f2766f] transition-all duration-300"
          type="text"
          placeholder="예) 돼지고기"
        />
        <input
          className="w-full p-2 rounded-md mt-2 border-none outline-none focus:outline-[#f2766f] transition-all duration-300"
          type="text"
          placeholder="10 (수량)"
        />
        <input
          className="w-full p-2 rounded-md mt-2 border-none outline-none focus:outline-[#f2766f] transition-all duration-300"
          type="text"
          placeholder="예) g, ml"
        />
        <input
          className="w-full p-2 rounded-md mt-2 border-none outline-none focus:outline-[#f2766f] transition-all duration-300"
          type="text"
          placeholder="예) 비고"
        />
      </div>
    </div>
  );
}
