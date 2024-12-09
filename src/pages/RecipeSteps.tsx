import { useEffect, useState } from "react";
import MikeIcon from "../assets/mike.svg";
import { RecipeType, Step } from "./AddByHand";

export default function RecipeSteps({
  recipe,
  handler,
  next_step = false,
  prev_step = false,
}: {
  recipe: RecipeType;
  handler: () => void;
  next_step?: boolean;
  prev_step?: boolean;
}) {
  const [steps, setSteps] = useState<Step[]>();
  const [step, setStep] = useState(0);

  useEffect(() => {
    setSteps(recipe.steps);
  }, [recipe]);

  useEffect(() => {
    if (step == steps?.length) return;
    setStep((state) => state + 1);
  }, [next_step]);

  useEffect(() => {
    if (step == 0) return;
    setStep((state) => state - 1);
  }, [prev_step]);

  return (
    <>
      <div>
        <div className="py-4 pb-8 ">
          <div className="flex justify-between items-center">
            <h1 className=" text-center font-bold text-[18px]">순서</h1>
            <button onClick={handler}>
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
