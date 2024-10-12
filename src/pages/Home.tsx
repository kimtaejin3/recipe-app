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

      <div className="flex flex-col justify-center gap-10 mt-14 items-center">
        <button>
          <Link
            to="/"
            className="w-[181px] h-[15vh] border-2 border-[#EB3830] rounded-[20px] bg-white flex items-center justify-center"
          >
            <span>Youtube로 가져오기</span>
          </Link>
        </button>
        <button>
          <Link
            to="/add-by-hand"
            className="w-[181px] h-[15vh] border-2 border-[#EB3830] rounded-[20px] bg-white flex items-center justify-center"
          >
            <span>직접 작성하기</span>
          </Link>
        </button>
        <button>
          <Link
            to="/add-by-website"
            className="w-[181px] h-[15vh] border-2 border-[#EB3830] rounded-[20px] bg-white flex items-center justify-center"
          >
            <span>Website에서 가져오기</span>
          </Link>
        </button>
      </div>
    </div>
  );
}
