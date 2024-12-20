/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { FaCameraRetro } from "react-icons/fa6";
import ScrollBtn from "../components/ScrollBtn";
import Ingredient from "../components/Ingredient";
import Recipe from "../components/Recipe";
import Saurce from "../components/Saurce";
import { storage } from "../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

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
  // ingredients: [{}],
  // steps: [{}],
  // spices: [{}],
};

export type RecipeType = {
  recipeId: string;
  ingredients: Ingredients[];
  steps: Step[];
  spices: Sauce[];
} & typeof DEFAULT_RCIPE;

export type Ingredients = {
  ingredientName: string;
  ingredientQuantity: string;
};

export type Sauce = {
  spiceName: string;
  spiceQuantity: string;
};

export type Step = {
  stepContent: string;
  stepImage: string;
  stepOrder: number;
};

export default function AddByHand() {
  const [step, setStep] = useState(1);
  const [recipeCount, setRecipeCount] = useState(1);
  const [recipe, setRecipe] = useState(DEFAULT_RCIPE);
  const [ingredientCount, setIngredientCount] = useState(1);
  const [saurceCount, setSaurceCount] = useState(1);

  const [ingredients, setIngredients] = useState<Ingredients[]>([]);
  const [sauces, setSauces] = useState<Sauce[]>([]);
  const [recipeSteps, setRecipeSteps] = useState<Step[]>([]);

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [preview, setPreview] = useState("");

  const handleGetImageUrl = async () => {
    const profileImgUrl = await handleImgSubmit();
    return profileImgUrl;
  };

  const handleImgSubmit = () => {
    if (!imageFile) return;
    const storageRef = ref(storage, `files/${imageFile!.name}`);
    const uploadTask = uploadBytes(storageRef, imageFile);

    return uploadTask.then((snapshot) => {
      return getDownloadURL(snapshot.ref).then((downloadUrl) => {
        return downloadUrl;
      });
    });
  };

  useEffect(() => {
    if (!imageFile) return;
    const nextPreview = URL.createObjectURL(imageFile);
    setPreview(nextPreview);

    return () => {
      URL.revokeObjectURL(nextPreview);
      setPreview("");
    };
  }, [imageFile]);

  useEffect(() => {
    if (!imageFile) return;

    (async () => {
      const url = await handleGetImageUrl();
      console.log(url);
      if (!url) return;
      handleChange("recipeMainImage", url);
      handleChange("recipeImage", url);
    })();
  }, [imageFile]);

  const handleStepUpClick = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(recipe);
    console.log(ingredients);
    console.log(sauces);
    console.log(recipeSteps);
    if (
      !recipe.recipeTitle ||
      !recipe.categoryId ||
      !recipe.recipeAmount ||
      !recipe.recipeContent ||
      !recipe.recipeDifficulty ||
      !recipe.recipeImage ||
      !recipe.recipeMainImage ||
      !recipe.recipeTime ||
      ingredients.length == 0 ||
      recipeSteps.length === 0
    ) {
      alert("양념정보와 요리팁을 제외한 모든 필드를 입력해야 합니다!");
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

  return (
    <div className="p-5">
      <div className="flex gap-5">
        <h1
          style={{ color: "#EB3830", fontSize: "19px" }}
          className=" font-semibold"
        >
          레시피 직접 작성하기
        </h1>
      </div>
      <form onSubmit={handleSubmit}>
        {step > 0 && (
          <div className="mt-4">
            <div className="block mt-7 mb-10 mx-auto w-[150px] h-[150px] bg-slate-300 rounded-md overflow-hidden">
              <label
                htmlFor="mainImage"
                className=" text-[13px] flex flex-col items-center justify-center gap-3 cursor-pointer relative w-full h-full overflow-hidden"
              >
                {!preview && (
                  <>
                    <FaCameraRetro size={40} />
                    요리 대표 사진을
                    <br /> 등록해 주세요.
                  </>
                )}
                {preview && (
                  <img
                    src={preview}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}
              </label>
              <input
                onChange={(e) => {
                  if (!e.target.files) return;
                  setImageFile(e.target.files[0]);
                }}
                type="file"
                hidden
                id="mainImage"
              />
            </div>
          </div>
        )}

        {step > 1 && (
          <div className="mt-4 bounce-short">
            <label className="block">레시피 제목</label>
            <input
              className="w-full p-2 rounded-md mt-2 border-none outline-none focus:outline-[#f2766f] transition-all duration-300"
              type="text"
              placeholder="예) 소고기 미역국 끓이기"
              name="recipeTitle"
              onChange={handleInputChange}
            />
          </div>
        )}
        {step > 2 && (
          <div className="mt-4">
            <label className="block">요리소개</label>
            <textarea
              name="recipeContent"
              onChange={handleInputChange}
              className="w-full p-2 outline-none rounded-md mt-2  focus:outline-[#f2766f] transition-all duration-300"
            ></textarea>
          </div>
        )}

        {step > 3 && (
          <div className="mt-4">
            <label>요리정보</label>
            <div className="flex gap-4 mt-2">
              <label className="items-center basis-20">인원</label>
              <select
                onChange={(e) => {
                  handleChange("recipeAmount", e.target.value);
                }}
                className="w-full p-2 outline-none rounded-md focus:outline-[#f2766f] transition-all duration-300"
              >
                <option>인원</option>
                <option>1인분</option>
                <option>2인분</option>
                <option>3인분</option>
                <option>4인분</option>
                <option>5인분</option>
                <option>6인분 이상</option>
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
                <option>5분 이내</option>
                <option>10분 이내</option>
                <option>15분 이내</option>
                <option>20분 이내</option>
                <option>30분 이내</option>
                <option>60분 이내</option>
                <option>90분 이내</option>
                <option>2시간 이내</option>
                <option>2시간 이상</option>
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
                <option>초급</option>
                <option>중급</option>
                <option>고급</option>
                <option>신의경지</option>
              </select>
            </div>

            <div className="flex gap-4 mt-4 items-center">
              <label className="basis-20">카테고리</label>
              <select
                onChange={(e) => {
                  if (e.target.value === "한식") {
                    console.log(1);
                    handleChange("categoryId", "1");
                  } else if (e.target.value === "중식") {
                    console.log(2);
                    handleChange("categoryId", "2");
                  } else {
                    console.log(3);
                    handleChange("categoryId", "3");
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
        )}
        {step > 4 && (
          <div className="mt-4">
            <div>
              <label>재료정보</label>
              <p className="mt-2 text-[12px] text-gray-500">
                재료가 남거나 부족하지 않도록 정확한 계량정보를 적어주세요.
              </p>
            </div>
            {new Array(ingredientCount).fill(0).map((_, index) => (
              <div
                className={`mt-4 pb-2 ${
                  ingredientCount > 1 &&
                  index != ingredientCount - 1 &&
                  "border-b-2 pb-5"
                }`}
              >
                <Ingredient onSetIngredients={setIngredients} />
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
        )}
        {step > 5 && (
          <div className="mt-4">
            <div>
              <label>양념정보</label>
              <p className="mt-2 text-[12px] text-gray-500">
                너무 달거나 짜지 않도록 정확한 양을 입력해주세요!
              </p>
            </div>
            {new Array(saurceCount).fill(0).map((_, index) => (
              <div
                className={`mt-4 pb-2 ${
                  saurceCount > 1 &&
                  index != saurceCount - 1 &&
                  "border-b-2 pb-5"
                }`}
              >
                <Saurce onSetSauce={setSauces} />
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
        )}
        {step > 6 && (
          <div className="mt-4">
            <div>
              <label>요리순서</label>
              <p className="mt-2 text-[12px] text-gray-500">
                요리의 맛이 좌우될 수 있는 중요한 부분은 빠짐없이 적어주세요.
              </p>
            </div>
            {new Array(recipeCount).fill(0).map((_, index) => {
              return <Recipe onSetStep={setRecipeSteps} count={index + 1} />;
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
        )}
        {step > 6 && (
          <div className="mt-4">
            <label className="block">요리팁</label>
            <textarea
              name="recipeTip"
              onChange={handleInputChange}
              className="w-full p-2 outline-none rounded-md mt-2  focus:outline-[#f2766f] transition-all duration-300"
            ></textarea>
          </div>
        )}
        {step > 6 && (
          <div className="mt-4">
            <button className="bg-[#ea3930] text-white p-2 rounded-md">
              레시피 저장
            </button>
          </div>
        )}
      </form>
      {step < 7 && (
        <div className="flex gap-7 mt-4">
          <button className="flex gap-2" onClick={handleStepUpClick}>
            <span>완료 했어요!</span>
            <ScrollBtn />
          </button>
        </div>
      )}
    </div>
  );
}
