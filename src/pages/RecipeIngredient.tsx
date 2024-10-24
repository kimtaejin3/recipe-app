import { FaBasketShopping } from "react-icons/fa6";
import MikeIcon from "../assets/mike.svg";
import { Ingredients, RecipeType } from "./AddByHand";
import { useEffect, useState } from "react";

export default function RecipeIngredient({ recipe }: { recipe: RecipeType }) {
  const [ingredients, setIngredients] = useState<Ingredients[]>();

  useEffect(() => {
    setIngredients(recipe.ingredients);
  }, [recipe]);

  return (
    <>
      <div>
        <div className="py-4 pb-8 flex justify-between items-center">
          <h1 className=" text-center font-bold text-[18px]">재료</h1>
          <button>
            <img src={MikeIcon} alt="mike_icon" />
          </button>
        </div>
        <ul className="flex flex-col gap-8">
          {ingredients?.map((ingredient) => (
            <li className="flex justify-between">
              <div className="flex items-center gap-2">
                <FaBasketShopping color={"#ea4e30"} />
                <span className="text-[17px]">{ingredient.ingredientName}</span>
              </div>
              <span>{ingredient.ingredientQuantity}</span>
            </li>
          ))}
        </ul>

        <div className="mt-[50px] flex items-center justify-center gap-4">
          <button className="border-[#EB4F30] border-2 border-solid rounded-[20px] py-2 px-[50px]">
            이전단계
          </button>
          <button className="bg-[#EB4F30] rounded-[20px] py-2 px-[50px] text-white">
            다음단계
          </button>
        </div>
      </div>
    </>
  );
}
