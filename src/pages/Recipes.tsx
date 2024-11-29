import { useEffect, useState } from "react";
import { RecipeType } from "./AddByHand";
import { Link } from "react-router-dom";

function RecipeCard({ image, title, description, id }: { image: string, title: string, description: string, id: string}) {
  return (
    <Link to={`/recipe/${id}`}>
        <div className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer">
        <img className="w-full h-48 object-cover" src={image} alt={title} />
        <div className="p-4">
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
        </div>
    </Link>
  );
}

export default function Recipes() {
  const [recipes, setRecipes] = useState<RecipeType[]>([]);
  const [category, setCategory] = useState<number>(3);

  useEffect(() => {
    const fetchRecipes = async () => {
      const res = await fetch(`/api/recipe/manual/category/${category}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const { recipes } = await (res.json() as Promise<{ recipes: RecipeType[] }>);
      console.log(recipes);
      setRecipes(recipes);
    };

    fetchRecipes();
  }, [category]);

  return (
    <div>
      <h1 className="text-2xl font-bold text-center py-4 text-[#ea4e30]">tastylog</h1>
      <div className="flex justify-center my-4">
        <button
          className={`px-4 py-2 mx-2 ${category === 3 ? 'bg-red-400 text-white' : 'bg-gray-200'}`}
          onClick={() => setCategory(3)}
        >
          한식
        </button>
        <button
          className={`px-4 py-2 mx-2 ${category === 2 ? 'bg-red-400 text-white' : 'bg-gray-200'}`}
          onClick={() => setCategory(2)}
        >
          중식
        </button>
        <button
          className={`px-4 py-2 mx-2 ${category === 1  ? 'bg-red-400 text-white' : 'bg-gray-200'}`}
          onClick={() => setCategory(1)}
        >
          양식
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4 p-4">
        {recipes.map((recipe, index) => (
          <RecipeCard
            key={index}
            id={recipe.recipeId}
            image={recipe.recipeMainImage}
            title={recipe.recipeTitle}
            description={recipe.recipeContent}
          />
        ))}
      </div>
    </div>
  );
}
