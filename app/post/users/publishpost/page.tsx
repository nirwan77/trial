"use client";

import { usePrivy } from "@privy-io/react-auth";
import { redirect } from "next/navigation";
import React, { useState, ChangeEvent, useEffect } from "react";

import Image from "next/image";
import { uploadPost } from "./action";
import { useRouter } from "next/navigation";
import { axios } from "@/lib";

function App(): JSX.Element {
  const { logout, ready, authenticated, user } = usePrivy();

  const { push } = useRouter();

  const [userStory, setUserStory] = useState<string | undefined>();

  const [files, setFiles] = useState<File[]>([]);

  const [checked, setChecked] = useState(false);

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
    if (files.length > 0) {
      const image = await uploadPost(files, user!.id);

      await axios.post("/uploadPost", {
        url: image,
        userId: user?.id,
        story: userStory,
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
          <button className="absolute left-4">
            <Image
              priority={true}
              src={"/BackArrowStatus.svg"}
              width={24}
              height={24}
              alt="back arrow"
            />
          </button>
          <h2 className="font">Publish a post</h2>
        </div>
      </div>
      <div className="flex gap-6 mb-8 justify-center">
        <Image
          priority={true}
          className="object-cover w-auto h-12 rounded-2xl overflow-hidden"
          src={"/ProfilePic.png"}
          width={48}
          height={48}
          alt="uploaded picture"
        />
        <textarea
          className="px-8 py-2 resize-none min-h-20 rounded-2xl border-SoSHColorDisabled border"
          name=""
          placeholder="Tell us the story..."
          id=""
          onChange={(e) => setUserStory(e.target.value)}
        />
      </div>

      <div className="px-7 mb-16">
        <h1 className="font-black text-sm mb-2">Add media Optional Max 9</h1>
        <div className="flex ">
          {previewUrl &&
            previewUrl.map((preview, idx) => (
              <Image
                priority={true}
                key={idx}
                className="object-cover h-60 w-32 rounded-lg overflow-hidden"
                src={preview || "/ProfilePic.png"}
                width={0}
                height={0}
                alt="uploaded picture"
              />
            ))}
          <label>
            <Image
              priority={true}
              src="/uploadPost.png"
              width={120}
              height={0}
              alt="upload image"
              className="object-cover h-60 w-32 rounded-lg overflow-hidden"
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
      </div>
      <div className="m-auto max-w-80 mb-11">
        <div className="flex justify-center items-start gap-3">
          <Image
            priority={true}
            src="/alert-triangle.svg"
            width={0}
            height={0}
            alt="upload image"
            className="h-6 w-7 object-cover"
          />
          <div className="flex flex-col gap-2">
            <p className="leading-4 font-black text-SoSHColorDisabled text-xs">
              Please note you may lose account and digital assets if you
              violated community guideline.
            </p>
            <form className="flex gap-2">
              <input
                type="checkbox"
                onClick={() => setChecked((prev) => !prev)}
              />
              <p className="leading-4 font-black text-SoSHColorPrimary text-xs">
                <span className="text-SoSHColorDisabled">I accept </span>
                Sosh Community Guideline
              </p>
            </form>
          </div>
        </div>
      </div>
      <div className="mb-[12vh]">
        <div className="flex flex-col m-auto max-w-96 gap-5">
          <button
            className={`px-28 py-2 rounded-2xl font-black ${
              checked
                ? " bg-SoSHColorPrimary text-white"
                : "bg-SoSHColorDisabled text-black"
            }`}
            disabled={checked ? false : true}
            onClick={handleClick}
          >
            Proceed
          </button>
          <button
            className="bg-orange-500 px-28 py-2 rounded-2xl font-black hover:bg-orange-600 text-white"
            onClick={logout}
          >
            logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
