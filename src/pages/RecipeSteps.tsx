import MikeIcon from "../assets/mike.svg";

export default function RecipeSteps() {
  return (
    <>
      <div>
        <div className="py-4 pb-8 ">
          <div className="flex justify-between items-center">
            <h1 className=" text-center font-bold text-[18px]">순서</h1>
            <button>
              <img src={MikeIcon} alt="mike_icon" />
            </button>
          </div>
          <ul className="flex gap-3 mt-1">
            {new Array(6).fill(0).map((el, i) => (
              <li className="bg-[#E4F0F2] w-5 h-5 flex items-center justify-center text-[12px] rounded-full">
                {el + i + 1}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
