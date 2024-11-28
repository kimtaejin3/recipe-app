import { useEffect, useState } from "react";
import MikeIcon from "../assets/mike.svg";
import { RecipeType, Step } from "./AddByHand";

export default function RecipeSteps({ recipe }: { recipe: RecipeType }) {
  const [steps, setSteps] = useState<Step[]>();
  const [step, setStep] = useState(0);

  useEffect(() => {
    setSteps(recipe.steps);
  }, [recipe]);

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
          <ul className="flex gap-3 flex-wrap mt-4">
            {steps?.map((el) => (
              <li
                className={` flex-shrink-0 bg-[#E4F0F2] w-5 h-5 flex items-center justify-center text-[12px] rounded-full cursor-pointer ${
                  el.stepOrder - 1 == step && "bg-[#ea4e30] text-white"
                }`}
                onClick={() => setStep(el.stepOrder - 1)}
              >
                {el.stepOrder}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p>{steps && steps[step].stepContent}</p>
          <div className="w-[300px] my-11 h-[190px] bg-red-50 mt-4 ">
            <img
              className="w-full h-full object-cover"
              src={steps && steps[step].stepImage}
            />
          </div>
        </div>
      </div>
    </>
  );
}
