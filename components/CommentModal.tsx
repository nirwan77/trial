import { axios } from "@/lib";
import Image from "next/image";
import { useState } from "react";

export const CommentsModal = ({
  postId,
  setShowCommentModal,
}: {
  postId: string | string[];
  setShowCommentModal: () => void;
}) => {
  const [comment, setComment] = useState<string | undefined>();

  const handleSubmit = async () => {
    await axios.post("/comment", {
      postId: postId,
      userId: localStorage.getItem("user"),
      comment: comment,
      likes: [],
    });
    setShowCommentModal();
  };

  return (
    <div className="fixed bottom-0 z-[107] bg-gray-600 bg-opacity-0 overflow-y-auto h-full w-full flex items-end justify-center">
      <div className="bg-white rounded-t-2xl w-full px-8 pb-10 pt-4 flex justify-between items-center">
        <input
          type="text"
          id="input"
          onChange={(e) => setComment(e.target.value)}
          placeholder="Welcome to the conversation..."
          className="w-full outline-none border-none font-medium text-sm leading-5 text-SoshColorGrey500 placeholder:text-sm placeholder:leading-5 placeholder:text-SoshColorGrey500 focus:bg-white"
        />
        <button onClick={handleSubmit}>
          <Image
            alt="message check"
            src={"/messageCheckSquare.svg"}
            width={24}
            height={24}
          />
        </button>
      </div>
    </div>
  );
};
