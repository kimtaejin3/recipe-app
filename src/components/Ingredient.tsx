import { useState } from "react";
import { Ingredients } from "../pages/AddByHand";

export default function Ingredient({
  init_name,
  init_quantity,
  onSetIngredients,
}: {
  init_name?: string;
  init_quantity?: string;
  onSetIngredients: React.Dispatch<React.SetStateAction<Ingredients[]>>;
}) {
  const [isClicked, setIsClicked] = useState(false);
  const [name, setName] = useState(init_name ? init_name : "");
  const [quantity, setQuantity] = useState(init_quantity ? init_quantity : "");

  return (
    <>
      <input
        className="w-full p-2 rounded-md mt-2 border-none outline-none focus:outline-[#f2766f] transition-all duration-300"
        type="text"
        disabled={isClicked}
        onChange={(e) => setName(e.target.value)}
        value={name}
        placeholder={`재료 이름`}
      />
      <div className="mt-4 flex flex-col gap-2">
        <input
          className="w-full p-2 rounded-md mt-2 border-none outline-none focus:outline-[#f2766f] transition-all duration-300"
          type="text"
          disabled={isClicked}
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="예) 10 (수량, g, ml)"
        />
      </div>
      <div>
        <button
          onClick={(e) => {
            e.preventDefault();
            console.log(name);
            if (name === "") {
              alert("재료명을 입력해주세요!");
              return;
            }
            if (quantity === "") {
              alert("양을 입력해주세요!");
              return;
            }

            setIsClicked(true);
            onSetIngredients((prev) => [
              ...prev,
              {
                ingredientName: name,
                ingredientQuantity: quantity,
              },
            ]);
          }}
          disabled={isClicked}
          className="bg-[#cbd5e1] mt-4 py-1 px-4 text-[12px] rounded-md"
        >
          확인
        </button>
      </div>
    </>
  );
}
