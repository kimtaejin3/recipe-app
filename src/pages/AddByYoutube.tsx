import { ChangeEvent, FormEvent, useState } from "react";
import { Ingredients, Sauce, Step } from "./AddByHand";
import { FaCameraRetro } from "react-icons/fa";
import Ingredient from "../components/Ingredient";
import Saurce from "../components/Saurce";
import Recipe from "../components/Recipe";

type Ingredient = {
  ingredientName: string;
  ingredientQuantity: string;
};

const DEFAULT_RCIPE = {
  recipeTitle: "",
  recipeContent: "",
  recipeImage: "",
  recipeMainImage: "",
  categoryId: 0,
  recipeAmount: "",
  recipeTime: "",
  recipeDifficulty: "",
  recipeTip: "",
  ingredients: [{} as Ingredient],
  steps: [{} as Step],
  spices: [{}],
};

export default function AddByWebsite() {
  const [recipeCount, setRecipeCount] = useState(1);
  const [recipe, setRecipe] = useState(DEFAULT_RCIPE);
  const [ingredientCount, setIngredientCount] = useState(1);
  const [saurceCount, setSaurceCount] = useState(1);

  const [ingredients, setIngredients] = useState<Ingredients[]>([]);
  const [sauces, setSauces] = useState<Sauce[]>([]);
  const [recipeSteps, setRecipeSteps] = useState<Step[]>([]);

  // const [preview, setPreview] = useState("");

  //urls
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  //preRecipe
  // const [preRecipe, setPreRecipe] = useState<typeof DEFAULT_RCIPE>();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log("recipe:", recipe);
    console.log(ingredients);
    console.log(sauces);
    console.log(recipeSteps);
    if (!recipe.categoryId) {
      alert("카테고리를 입력해주세요.");
      return;
    }

    try {
      await fetch("/api/recipe/manual", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...recipe,
          categoryId: Number(recipe.categoryId),
          ingredients,
          spices: [...sauces],
          steps: [...recipeSteps],
          memberId: 2,
          url: "",
        }),
      });
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (name: string, value: string | number) => {
    // setRecipe((prev)=>{
    //   ...prev,
    //   [name]: value,
    // });

    setRecipe((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleLoadRecipe = async (e: MouseEvent) => {
    e.preventDefault();
    setLoading(true);
    const data = await fetch(`/api/recipe/youtube?memberId=2&url=${url}`);
    const res = await data.json();

    console.log("res:", res);
    setLoading(false);
    setIngredientCount(res.ingredients.length);
    setRecipeCount(res.steps.length);

    setRecipe((preValue) => ({
      ...preValue,
      recipeTitle: res.recipeTitle,
      recipeContent: res.recipeContent,
      recipeMainImage: res.recipeMainImage,
      recipeImage: res.recipeImage,
      recipeAmount: res.recipeAmount,
      recipeTime: res.recipeTime,
      recipeDifficulty: res.recipeDifficulty,
      recipeTip: res.recipeTip,
      categoryId: res.categoryId,
    }));
    console.log("ingredients:", res.ingredients);
    setIngredients([...res.ingredients]);
    setRecipeSteps(
      res.steps.map((step, index) => ({
        ...step,
        recipeStepId: index + 1,
      }))
    );
    setSauces([...res.spices]);
  };

  return (
    <div className="p-5">
      <div className="flex gap-5">
        <h1
          style={{ color: "#EB3830", fontSize: "19px" }}
          className=" font-semibold"
        >
          레시피 유튜브에서 불러오기
        </h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mt-4">
          <div className="block mt-7 mb-10 mx-auto w-[150px] h-[150px] bg-slate-300 rounded-md overflow-hidden">
            <div className=" text-[13px] flex flex-col items-center justify-center gap-3 cursor-pointer relative w-full h-full overflow-hidden">
              {!recipe?.recipeMainImage && (
                <>
                  <FaCameraRetro size={40} />
                </>
              )}
              {recipe?.recipeMainImage && (
                <img
                  src={recipe?.recipeMainImage}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
            </div>
          </div>
        </div>

        <div className="mt-4 bounce-short">
          <label className="block">레시피 불러오기</label>
          <div className="flex gap-2">
            <input
              className="w-full p-2 rounded-md mt-2 border-none outline-none focus:outline-[#f2766f] transition-all duration-300"
              type="url"
              placeholder="url을 입력해주세요."
              name="recipeTitle"
              onChange={(e) => setUrl(e.target.value)}
            />

            <button
              onClick={handleLoadRecipe}
              className=" shrink-0 items-center bg-[#ea3930] text-white px-1 text-[14px] rounded-md"
            >
              불러오기
            </button>
          </div>
          {loading && <div>레시피를 불러오는 중 입니다...</div>}
        </div>

        <div className="mt-4 bounce-short">
          <label className="block">레시피 제목</label>
          <input
            className="w-full p-2 rounded-md mt-2 border-none outline-none focus:outline-[#f2766f] transition-all duration-300"
            type="text"
            placeholder="예) 소고기 미역국 끓이기"
            name="recipeTitle"
            defaultValue={recipe?.recipeTitle}
            onChange={handleInputChange}
          />
        </div>
        <div className="mt-4">
          <label className="block">요리소개</label>
          <textarea
            name="recipeContent"
            onChange={handleInputChange}
            defaultValue={recipe?.recipeContent}
            className="w-full p-2 outline-none rounded-md mt-2  focus:outline-[#f2766f] transition-all duration-300"
          ></textarea>
        </div>

        <div className="mt-4">
          <label>요리정보</label>
          <div className="flex gap-4 mt-2">
            <label className="items-center basis-20">인원</label>
            <select
              onChange={(e) => {
                handleChange("recipeAmount", e.target.value);
              }}
              defaultValue={recipe?.recipeAmount}
              className="w-full p-2 outline-none rounded-md focus:outline-[#f2766f] transition-all duration-300"
            >
              <option>인원</option>
              <option selected={recipe?.recipeAmount === "1인분"} value="1인분">
                1인분
              </option>
              <option selected={recipe?.recipeAmount === "2인분"} value="2인분">
                2인분
              </option>
              <option selected={recipe?.recipeAmount === "3인분"} value="3인분">
                3인분
              </option>
              <option selected={recipe?.recipeAmount === "4인분"} value="4인분">
                4인분
              </option>
              <option selected={recipe?.recipeAmount === "5인분"} value="5인분">
                5인분
              </option>
              <option
                selected={recipe?.recipeAmount === "6인분 이상"}
                value="6인분 이상"
              >
                6인분 이상
              </option>
            </select>
          </div>
          <div className="flex gap-4 my-4">
            <label className="items-center basis-20">시간</label>
            <select
              onChange={(e) => {
                handleChange("recipeTime", e.target.value);
              }}
              className="w-full p-2 outline-none rounded-md focus:outline-[#f2766f] transition-all duration-300"
            >
              <option>시간</option>
              <option selected={recipe?.recipeTime === "5분 이내"}>
                5분 이내
              </option>
              <option selected={recipe?.recipeTime === "10분 이내"}>
                10분 이내
              </option>
              <option selected={recipe?.recipeTime === "15분 이내"}>
                15분 이내
              </option>
              <option selected={recipe?.recipeTime === "20분 이내"}>
                20분 이내
              </option>
              <option selected={recipe?.recipeTime === "30분 이내"}>
                30분 이내
              </option>
              <option selected={recipe?.recipeTime === "60분 이내"}>
                60분 이내
              </option>
              <option selected={recipe?.recipeTime === "90분 이내"}>
                90분 이내
              </option>
              <option selected={recipe?.recipeTime === "2시간 이내"}>
                2시간 이내
              </option>
              <option selected={recipe?.recipeTime === "2시간 이상"}>
                2시간 이상
              </option>
            </select>
          </div>
          <div className="flex gap-4">
            <label className="basis-20">난이도</label>
            <select
              onChange={(e) => {
                handleChange("recipeDifficulty", e.target.value);
              }}
              className="w-full p-2 outline-none rounded-md focus:outline-[#f2766f] transition-all duration-300"
            >
              <option>난이도</option>
              <option selected={recipe?.recipeDifficulty === "아무나"}>
                아무나
              </option>
              <option selected={recipe?.recipeDifficulty === "초급"}>
                초급
              </option>
              <option selected={recipe?.recipeDifficulty === "중급"}>
                중급
              </option>
              <option selected={recipe?.recipeDifficulty === "고급"}>
                고급
              </option>
              <option selected={recipe?.recipeDifficulty === "신의경지"}>
                신의경지
              </option>
            </select>
          </div>

          <div className="flex gap-4 mt-4 items-center">
            <label className="basis-20">카테고리</label>
            <select
              onChange={(e) => {
                if (e.target.value === "한식") {
                  console.log(1);
                  handleChange("categoryId", "3");
                } else if (e.target.value === "중식") {
                  console.log(2);
                  handleChange("categoryId", "2");
                } else {
                  console.log(3);
                  handleChange("categoryId", "1");
                }
              }}
              className="w-full p-2 outline-none rounded-md focus:outline-[#f2766f] transition-all duration-300"
            >
              <option>카테고리</option>
              <option>한식</option>
              <option>중식</option>
              <option>일식</option>
            </select>
          </div>
        </div>
        <div className="mt-4">
          <div>
            <label>재료정보</label>
            <p className="mt-2 text-[12px] text-gray-500">
              재료가 남거나 부족하지 않도록 정확한 계량정보를 적어주세요.
            </p>
          </div>
          {ingredients?.map((ingredient, index) => (
            <div
              className={`mt-4 pb-2 ${
                ingredientCount > 1 &&
                index != ingredientCount - 1 &&
                "border-b-2 pb-5"
              }`}
            >
              <Ingredient
                init_name={ingredient.ingredientName}
                init_quantity={ingredient.ingredientQuantity}
                onSetIngredients={setIngredients}
              />
            </div>
          ))}
          <div className="flex gap-2">
            <button
              className="bg-[#f2766f] text-white mt-2 rounded-md px-6"
              onClick={(e) => {
                e.preventDefault();
                setIngredientCount((prevCnt) => prevCnt + 1);
              }}
            >
              +
            </button>
            <button
              className="bg-[#f2766f] text-white mt-2 rounded-md px-6"
              onClick={(e) => {
                e.preventDefault();
                if (ingredientCount > 1) {
                  setIngredientCount((prevCnt) => prevCnt - 1);
                }
              }}
            >
              -
            </button>
          </div>
        </div>
        <div className="mt-4">
          <div>
            <label>양념정보</label>
            <p className="mt-2 text-[12px] text-gray-500">
              너무 달거나 짜지 않도록 정확한 양을 입력해주세요!
            </p>
          </div>
          {sauces.map((sauce, index) => (
            <div
              className={`mt-4 pb-2 ${
                saurceCount > 1 && index != saurceCount - 1 && "border-b-2 pb-5"
              }`}
            >
              <Saurce
                init_name={sauce.spiceName}
                init_quantity={sauce.spiceQuantity}
                onSetSauce={setSauces}
              />
            </div>
          ))}
          <div className="flex gap-2">
            <button
              className="bg-[#f2766f] text-white mt-2 rounded-md px-6"
              onClick={(e) => {
                e.preventDefault();
                setSaurceCount((prevCnt) => prevCnt + 1);
              }}
            >
              +
            </button>
            <button
              className="bg-[#f2766f] text-white mt-2 rounded-md px-6"
              onClick={(e) => {
                e.preventDefault();
                if (saurceCount > 1) {
                  setSaurceCount((prevCnt) => prevCnt - 1);
                }
              }}
            >
              -
            </button>
          </div>
        </div>
        <div className="mt-4">
          <div>
            <label>요리순서</label>
            <p className="mt-2 text-[12px] text-gray-500">
              요리의 맛이 좌우될 수 있는 중요한 부분은 빠짐없이 적어주세요.
            </p>
          </div>
          {recipeSteps.map((step, index) => {
            return (
              <Recipe
                init_content={step.stepContent}
                init_image={step.stepImage}
                onSetStep={setRecipeSteps}
                count={index + 1}
              />
            );
          })}
          <div className="flex gap-4 mt-4 ">
            <button
              className="bg-[#f2766f] text-white rounded-md px-6 py-1 text-[13px]"
              onClick={(e) => {
                e.preventDefault();
                setRecipeCount((recipeCount) => recipeCount + 1);
              }}
            >
              순서추가
            </button>
          </div>
        </div>
        <div className="mt-4">
          <label className="block">요리팁</label>
          <textarea
            name="recipeTip"
            onChange={handleInputChange}
            className="w-full p-2 outline-none rounded-md mt-2  focus:outline-[#f2766f] transition-all duration-300"
          ></textarea>
        </div>
        <div className="mt-4">
          <button className="bg-[#ea3930] text-white p-2 rounded-md">
            레시피 저장
          </button>
        </div>
      </form>
    </div>
  );
}
