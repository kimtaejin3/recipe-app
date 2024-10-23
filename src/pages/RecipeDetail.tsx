import { GrFormPrevious } from "react-icons/gr";
import Food from "../assets/foodCover.png";
// import RecipeInfo from "./RecipeInfo";
import RecipeIngredient from "./RecipeIngredient";

export default function Recipe() {
  return (
    <div className="pb-10">
      <div className="relative">
        <div className="relative aspect-[1.4/1] bg-red-100">
          <header className="absolute py-3 px-3">
            <div className="flex items-center justify-between">
              <div className="bg-white w-6 h-6 rounded-full flex items-center justify-center cursor-pointer">
                <GrFormPrevious size={20} />
              </div>
            </div>
          </header>
          <img className="w-full h-full" src={Food} alt="food" />
        </div>
      </div>
      <div className="bg-[#F7F9FC] rounded-t-[20px] relative z-10 -top-7 px-5">
        {/* <RecipeInfo /> */}
        <RecipeIngredient />
      </div>
    </div>
  );
}
