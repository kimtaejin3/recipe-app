import { GrFormPrevious } from "react-icons/gr";
import { RecipeType } from "./AddByHand";
import { useEffect, useState } from "react";
import RecipeInfo from "./RecipeInfo";
import RecipeIngredient from "./RecipeIngredient";
import RecipeSteps from "./RecipeSteps";

export default function Recipe() {
  const [recipe, setRecipe] = useState({} as RecipeType);
  const [page, setPage] = useState<"info" | "ingredient" | "step">("step");

  useEffect(() => {
    (async () => {
      const res = await fetch(`/api/recipe/manual/${27}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const { recipe } = await (res.json() as Promise<{ recipe: RecipeType }>);
      setRecipe({ ...recipe });
    })();
  }, []);

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
          <img
            className="w-full h-full"
            src={recipe && recipe.recipeMainImage}
            alt="food"
          />
        </div>
      </div>
      <div className="bg-[#F7F9FC] rounded-t-[20px] relative z-10 -top-7 px-5">
        {page === "info" && <RecipeInfo recipe={recipe} />}
        {page === "ingredient" && <RecipeIngredient recipe={recipe} />}
        {page === "step" && <RecipeSteps recipe={recipe} />}
      </div>
    </div>
  );
}
