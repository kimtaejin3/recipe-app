import { FaCameraRetro } from "react-icons/fa6";
import { Step } from "../pages/AddByHand";
import { useState } from "react";

export default function Recipe({
  init_content,
  init_image,
  count,
  onSetStep,
}: {
  count: number;
  init_image?: string;
  init_content?: string;
  onSetStep: React.Dispatch<React.SetStateAction<Step[]>>;
}) {
  const [content, setContent] = useState(init_content ? init_content : "");
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="mt-4">
      <h2 className="mb-2">step {count}</h2>
      <div className="flex gap-2">
        <textarea
          onChange={(e) => setContent(e.target.value)}
          disabled={isClicked}
          defaultValue={init_content}
          className="m-0 w-full p-2 rounded-md border-none outline-none focus:outline-[#f2766f] transition-all duration-300"
        />
        <label
          className="w-[100px] bg-[#cbd5e1] rounded-md flex justify-center items-center cursor-pointer relative overflow-hidden"
          htmlFor={`image${count}`}
        >
          <FaCameraRetro color="#aaa" />
          {init_image && (
            <img src={init_image} className=" absolute inset-0 w-full h-full" />
          )}
        </label>
      </div>
      <button
        onClick={async (e) => {
          e.preventDefault();
          if (content === "") {
            alert("레시피를 입력해주세요!");
            return;
          }

          setIsClicked(true);
          onSetStep((prev) => [
            ...prev,
            {
              stepContent: content,
              stepImage: init_image as string,
              stepOrder: count - 1,
            },
          ]);
        }}
        disabled={isClicked}
        className="bg-[#cbd5e1] mt-4 py-1 px-4 text-[12px] rounded-md"
      >
        확인
      </button>
    </div>
  );
}
