import { GrFormPrevious } from "react-icons/gr";
import { RecipeType } from "./AddByHand";
import { useEffect, useState } from "react";
import RecipeInfo from "./RecipeInfo";
import RecipeIngredient from "./RecipeIngredient";
import RecipeSteps from "./RecipeSteps";

export default function Recipe() {
  const [recipe, setRecipe] = useState({} as RecipeType);
  const [page, setPage] = useState<"info" | "ingredient" | "step">("info");
  const recognition = new window.webkitSpeechRecognition();
  const [voice, setVoice] = useState("");
  console.log("voic:", voice);
  const prevClick = () => {
    if (page === "ingredient") {
      setPage("info");
    } else if (page === "step") {
      setPage("ingredient");
    }
  };

  const nextClick = () => {
    if (page === "info") {
      setPage("ingredient");
    } else if (page === "ingredient") {
      setPage("step");
    }
  };

  recognition.onresult = function (event) {
    let finalTranscript = "";
    let interimTranscript = "";
    if (typeof event.results === "undefined") {
      recognition.onend = null;
      recognition.stop();
      return;
    }

    for (let i = event.resultIndex; i < event.results.length; ++i) {
      const transcript = event.results[i][0].transcript;
      if (event.results[i].isFinal) {
        finalTranscript += transcript;
      } else {
        interimTranscript += transcript;
      }
    }

    setVoice(finalTranscript);
    console.log("finalTranscript", finalTranscript);
    console.log("interimTranscript", interimTranscript);
    // fireCommand(interimTranscript);
  };

  recognition.onend = function () {
    recognition.start();
  };

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
      <button
        onClick={() => {
          recognition.start();
        }}
      >
        임시마이크
      </button>
      <div className="mt-[50px] flex items-center justify-center gap-4">
        {page !== "info" && (
          <button
            className="border-[#EB4F30] border-2 border-solid rounded-[20px] py-2 px-[50px]"
            onClick={prevClick}
          >
            이전단계
          </button>
        )}
        {page !== "step" && (
          <button
            className="bg-[#EB4F30] rounded-[20px] py-2 px-[50px] text-white"
            onClick={nextClick}
          >
            다음단계
          </button>
        )}
      </div>
    </div>
  );
}
