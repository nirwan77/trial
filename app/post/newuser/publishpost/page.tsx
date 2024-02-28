"use client";

import { usePrivy } from "@privy-io/react-auth";
import { redirect } from "next/navigation";
import React, { useState, ChangeEvent, useEffect } from "react";

import Image from "next/image";
import { uploadPost } from "./action";
import { useRouter } from "next/navigation";
import { axios } from "@/lib";

function App(): JSX.Element {
  const { ready, authenticated, user } = usePrivy();

  const { push, back } = useRouter();

  const [userStory, setUserStory] = useState<string | undefined>();

  const [files, setFiles] = useState<File[]>([]);

  const [showModal, setShowModal] = useState(false);

  const [disableButton, setDisableButton] = useState(false);

  const [previewUrl, setPreviewUrl] = useState<string[] | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const filesArray = e.target.files;
    if (!filesArray) {
      return;
    }
    const selectedFiles = Array.from(filesArray);
    if (selectedFiles.length > 9) {
      alert("You can only upload up to 9 photos.");
    } else {
      setFiles(selectedFiles);
      const url = selectedFiles.map((a) => URL.createObjectURL(a));
      setPreviewUrl(url);
    }
  };

  const handleClick = async () => {
    setDisableButton(true);
    if (files.length > 0) {
      const { image, ipfsLink } = await uploadPost(files, user!.id);

      await axios.post("/uploadPost", {
        url: image,
        userId: user?.id,
        story: userStory,
        ipfs: ipfsLink,
        views: [],
      });
    }

    push("/post/users/confirmCCT");
  };

  useEffect(() => {
    if (ready && !authenticated) {
      push("/");
    }
  }, [authenticated, push, ready]);

  return (
    <div>
      <div className="flex justify-center flex-col items-center">
        <div className="mb-14 mt-10 font-[425]">
          <h2 className="font">Publish a post</h2>
        </div>
      </div>
      <div className="flex w-96 justify-between items-start m-auto mb-6">
        <button onClick={() => push("/ccts")}>Cancel</button>
        <button
          onClick={() => setShowModal(true)}
          className="px-8 py-2 text-xs text-white font-[425] leading-5 bg-green-500 rounded-lg"
        >
          Proceed
        </button>
      </div>
      <div className="flex m-auto w-96 gap-4 mb-8 items-start justify-start">
        <Image
          priority={true}
          className="object-cover rounded-2xl overflow-hidden"
          src={"/smilingFace.svg"}
          width={34}
          height={34}
          alt="uploaded picture"
        />
        <div>
          <textarea
            className="resize-none min-h-16 w-72 outline-none focus:border-none"
            name=""
            placeholder="Tell us the story..."
            id=""
            onChange={(e) => setUserStory(e.target.value)}
          />
        </div>
      </div>

      <div className="pl-7 mb-16">
        <div className="overflow-no-scroll flex gap-2 overflow-x-scroll">
          {previewUrl &&
            previewUrl.map((preview, idx) => (
              <Image
                priority={true}
                key={idx}
                className="object-cover rounded-lg"
                src={preview || "/ProfilePic.png"}
                width={350}
                height={250}
                alt="uploaded picture"
              />
            ))}
        </div>

        <div
          className={
            `${showModal ? "flex " : "hidden "}` +
            "fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center"
          }
        >
          <div className="py-8 px-2 w-360 border shadow-lg rounded-2xl bg-white">
            <div className="flex flex-col justify-center items-center gap-8">
              <div className="flex leading-Sosh22 justify-center px-8">
                <div>purchase 1 CCT* to post</div>
              </div>
              <div className="flex gap-8 justify-center w-full items-start m-auto mb-6">
                <button
                  onClick={handleClick}
                  disabled={disableButton}
                  className="px-8 py-2 text-xs text-white font-[425] leading-5 bg-green-500 rounded-lg"
                >
                  Proceed
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="px-8 py-2 text-xs font-[425] leading-5 border border-SoSHColorDisabled rounded-lg"
                >
                  Cancel
                </button>
              </div>
            </div>
            <div className="text-xs text-center text-SoshColorGrey400 font-[425] leading-5 ">
              *Content Certification Token (CCT){" "}
            </div>
          </div>
        </div>
      </div>

      <label className="fixed bottom-0 flex justify-center left-0 py-4 w-screen sosh__background">
        <Image
          priority={true}
          src="/camera.svg"
          width={26}
          height={24}
          alt="upload image"
          className="object-cover overflow-hidden"
        />
        <input
          className="hidden"
          accept="image/*"
          type="file"
          multiple
          max={9}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}

export default App;
