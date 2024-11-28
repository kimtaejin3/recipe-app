import { FaBasketShopping } from "react-icons/fa6";
import MikeIcon from "../assets/mike.svg";
import { Ingredients, RecipeType } from "./AddByHand";
import { useEffect, useState } from "react";

export default function RecipeIngredient({ recipe, handler }: { recipe: RecipeType, handler: () => void }) {
  const [ingredients, setIngredients] = useState<Ingredients[]>();

  useEffect(() => {
    setIngredients(recipe.ingredients);
  }, [recipe]);

  return (
    <>
      <div>
        <div className="py-4 pb-8 flex justify-between items-center">
          <h1 className=" text-center font-bold text-[18px]">재료</h1>
          <button onClick={handler}>
            <img src={MikeIcon} alt="mike_icon" />
          </button>
        </div>
        <ul className="flex flex-col gap-8">
          {ingredients?.map((ingredient) => (
            <li className="flex justify-between">
              <div className="flex items-center gap-4 shrink-0">
                <FaBasketShopping color={"#ea4e30"} />
                <span className="text-[17px]">{ingredient.ingredientName}</span>
              </div>
              <span>{ingredient.ingredientQuantity}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
