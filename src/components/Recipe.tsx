import { FaCameraRetro } from "react-icons/fa6";
import { Step } from "../pages/AddByHand";
import { useEffect, useState } from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase";

export default function Recipe({
  count,
  onSetStep,
}: {
  count: number;
  onSetStep: React.Dispatch<React.SetStateAction<Step[]>>;
}) {
  const [content, setContent] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isClicked, setIsClicked] = useState(false);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGetImageUrl = async () => {
    setLoading(true);
    const profileImgUrl = await handleImgSubmit();
    return profileImgUrl;
  };

  const handleImgSubmit = () => {
    if (!imageFile) return;
    const storageRef = ref(storage, `files/${imageFile!.name}`);
    const uploadTask = uploadBytes(storageRef, imageFile);

    return uploadTask.then((snapshot) => {
      return getDownloadURL(snapshot.ref).then((downloadUrl) => {
        setLoading(false);
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

  return (
    <div className="mt-4">
      <h2 className="mb-2">step {count}</h2>
      <div className="flex gap-2">
        <textarea
          onChange={(e) => setContent(e.target.value)}
          disabled={isClicked}
          className="m-0 w-full p-2 rounded-md border-none outline-none focus:outline-[#f2766f] transition-all duration-300"
        />
        <label
          className="w-[100px] bg-[#cbd5e1] rounded-md flex justify-center items-center cursor-pointer relative overflow-hidden"
          htmlFor={`image${count}`}
        >
          <FaCameraRetro color="#aaa" />
          {preview && (
            <img src={preview} className=" absolute inset-0 w-full h-full" />
          )}
        </label>
        <input
          onChange={(e) => {
            if (!e.target.files) return;
            setImageFile(e.target.files[0]);
          }}
          disabled={isClicked}
          hidden
          id={`image${count}`}
          type="file"
        />
      </div>
      <button
        onClick={async (e) => {
          e.preventDefault();
          if (content === "") {
            alert("레시피를 입력해주세요!");
            return;
          }
          if (!imageFile) {
            alert("이미지를 넣어주세요!");
            return;
          }

          const url = await handleGetImageUrl();
          if (url === undefined) {
            alert("실패");
            return;
          }

          setIsClicked(true);
          onSetStep((prev) => [
            ...prev,
            {
              stepContent: content,
              stepImage: url,
              stepOrder: count - 1,
            },
          ]);
        }}
        disabled={isClicked}
        className="bg-[#cbd5e1] mt-4 py-1 px-4 text-[12px] rounded-md"
      >
        확인 {loading && <span>loading...</span>}
      </button>
    </div>
  );
}
