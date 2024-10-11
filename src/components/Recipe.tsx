import { FaCameraRetro } from "react-icons/fa6";
import { Step } from "../pages/AddByHand";
import { useState } from "react";

export default function Recipe({
  count,
  onSetStep,
}: {
  count: number;
  onSetStep: React.Dispatch<React.SetStateAction<Step[]>>;
}) {
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="mt-4">
      <h2 className="mb-2">step {count}</h2>
      <div className="flex gap-2">
        <textarea
          onChange={(e) => setContent(e.target.value)}
          className="m-0 w-full p-2 rounded-md border-none outline-none focus:outline-[#f2766f] transition-all duration-300"
        />
        <label
          className="w-[100px] bg-[#cbd5e1] rounded-md flex justify-center items-center cursor-pointer"
          htmlFor="image"
        >
          <FaCameraRetro color="#aaa" />
        </label>
        <input
          onChange={(e) => {
            console.log(e.target.files && e.target.files[0]);
          }}
          hidden
          id="image"
          type="file"
        />
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          if (content === "") {
            alert("레시피를 입력해주세요!");
            return;
          }
          if (image === "") {
            alert("이미지를 넣어주세요!");
            return;
          }

          setIsClicked(true);
          onSetStep((prev) => [
            ...prev,
            {
              stepContent: "",
              stepImage: "",
              stepOrder: count + 1,
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
