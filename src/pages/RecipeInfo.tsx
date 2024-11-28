import PorkIcon from "../assets/pork.svg";
import MikeIcon from "../assets/mike.svg";
import Rating from "../assets/rating.svg";

import { IoIosTime } from "react-icons/io";
import { IoPeople } from "react-icons/io5";
import { PiStepsFill } from "react-icons/pi";
import { RecipeType } from "./AddByHand";

export default function RecipeInfo({ recipe, handler }: { recipe: RecipeType, handler: () => void }) {
  return (
    <>
      <div className="py-4 flex justify-between">
        <div className="flex gap-2 shrink-0">
          <img src={PorkIcon} alt="pork_icon" />
          <span className="text-[16px] font-semibold tracking-[4px]">
            국/탕
          </span>
        </div>
        <button
         onClick={handler}
        >
          <img src={MikeIcon} alt="mike_icon" />
        </button>
      </div>
      <div>
        <h1 className="text-[20px] font-bold">
          {recipe && recipe.recipeTitle}
        </h1>
        <img className="my-2" src={Rating} alt="임시 레이팅" />
      </div>
      <div>{recipe && recipe.recipeContent}</div>
      <ul className="mt-8 flex justify-center gap-[15px]">
        <li className="bg-[#EB3830] w-[90px] rounded-md flex flex-col gap-3 items-center py-6 text-white">
          <PiStepsFill size={25} />
          <span>{recipe && recipe.recipeDifficulty}</span>
        </li>
        <li className="bg-[#EB3830] w-[90px] rounded-md flex flex-col gap-3 items-center py-6 text-white">
          <IoIosTime size={25} />
          <span>{recipe && recipe.recipeTime}</span>
        </li>
        <li className="bg-[#EB3830] w-[90px] rounded-md flex flex-col gap-3 items-center py-6 text-white">
          <IoPeople size={25} />
          <span>{recipe && recipe.recipeAmount}</span>
        </li>
      </ul>
    </>
  );
}
