import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="flex gap-5 p-4">
        <h1
          style={{ color: "#EB3830", fontSize: "19px" }}
          className=" font-semibold"
        >
          레시피 가져오기
        </h1>
      </div>

      <div>
        <button className="block">
          <Link
            to="/"
            className="w-[181px] h-[119px] p-[40px] border-2 border-[#EB3830] rounded-[20px] bg-white"
          >
            Youtube로 가져오기
          </Link>
        </button>
        <button className="block">
          <Link
            to="/edit"
            className="w-[181px] h-[119px] p-[40px] border-2 border-[#EB3830] rounded-[20px] bg-white"
          >
            직접 메모하기
          </Link>
        </button>
        <button className="block">
          <Link
            to="/"
            className="w-[181px] h-[119px] p-[40px] border-2 border-[#EB3830] rounded-[20px] bg-white"
          >
            Website에서 가져오기
          </Link>
        </button>
      </div>
    </div>
  );
}
