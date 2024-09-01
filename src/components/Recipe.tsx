import { FaPlus } from "react-icons/fa";

export default function Recipe({ count }: { count: number }) {
  return (
    <div className="mt-4">
      <h2 className="mb-2">step {count}</h2>
      <div className="flex gap-2">
        <textarea className="m-0 w-full p-2 rounded-md border-none outline-none focus:outline-[#f2766f] transition-all duration-300" />
        <div className="w-[100px] bg-[#cbd5e1] rounded-md flex justify-center items-center cursor-pointer">
          <FaPlus color="#aaa" />
        </div>
      </div>
    </div>
  );
}
