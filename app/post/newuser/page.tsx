"use client";

import React, { useState, ChangeEvent } from "react";
import Image from "next/image";

import { useRouter } from "next/navigation";
import { usePrivy } from "@privy-io/react-auth";
import { axios } from "@/lib";
import { getSignedUrlFunction } from "./action";

function App(): JSX.Element {
  const { user } = usePrivy();
  const [file, setFile] = useState<File | null>();
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [username, setUsername] = useState<string>("");

  const router = useRouter();

  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    const file = e.target.files?.[0] ?? null;
    setFile(file);
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    } else {
      setPreviewUrl(null);
    }
  }

  const handleSubmit = async () => {
    let uploadedImage = "";
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      const { signedUrl, image } = await getSignedUrlFunction(
        file.type,
        user?.id || ""
      );

      await axios.put(signedUrl, file, {
        headers: {
          "Content-Type": file.type,
        },
      });
      uploadedImage = image;
    }

    await axios.post("/users", {
      id: user?.id,
      createdAt: user?.createdAt,
      linkedAccounts: user?.linkedAccounts,
      username,
      image: uploadedImage,
    });

    router.push("/post/newuser/connectx");
  };

  return (
    <div className="flex justify-center flex-col items-center">
      <div className="bg-green-300 w-full flex-col flex items-center justify-center">
        <div className="mb-14 mt-10 font-[425]">
          <button className="absolute left-4" onClick={() => router.back()}>
            <Image
              priority={true}
              src={"/BackArrowStatus.svg"}
              width={24}
              height={24}
              alt="back arrow"
            />
          </button>
          <h2 className="font-[425] text-SoshColorGrey700 leading-5">
            Set up profile
          </h2>
        </div>

        <div className=" relative w-28 h-28 mb-20">
          <Image
            priority={true}
            className="object-cover h-full rounded-2xl overflow-hidden"
            src={previewUrl || "/ProfilePic.png"}
            width={112}
            height={112}
            alt="uploaded picture"
          />
          <label className="absolute z-20 bottom-0 -right-1 cursor-pointer">
            <Image
              priority={true}
              src="/uploadImage.png"
              width={32}
              height={31}
              alt="upload image"
            />
            <input
              className="hidden"
              accept="image/*"
              type="file"
              onChange={handleChange}
            />
          </label>
        </div>
      </div>

      <div className="flex flex-col items-center gap-8 pt-11 w-96">
        <div className="text-lg leading-Sosh22">Tell us about you</div>
        <input
          className="border-SoSHColorDisabled w-full p-4 rounded-2xl mb-8 border "
          placeholder="Username"
          type="text"
          id="fname"
          name="fname"
          onChange={(event) => setUsername(event.target.value)}
        />

        <button
          className={`w-full p-4 font-[425] text-sm leading-Sosh22 rounded-2xl ${
            username?.length > 0
              ? " bg-green-300 text-white"
              : "bg-SoSHColorDisabled text-black"
          }`}
          disabled={username?.length === 0 ? true : false}
          onClick={handleSubmit}
        >
          Proceed
        </button>
      </div>
    </div>
  );
}

export default App;
