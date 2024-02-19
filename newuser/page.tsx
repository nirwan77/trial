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

    router.push("/newuser/connectx");
  };

  return (
    <div className="flex justify-center flex-col items-center">
      <div className="mb-10 mt-4 font-[425]">
        <button
          className="absolute left-4"
          onClick={() => router.push("/home")}
        >
          <Image
            priority={true}
            src={"/BackArrowStatus.svg"}
            width={24}
            height={24}
            alt="back arrow"
          />
        </button>
        <h2 className="font">Set up profile</h2>
      </div>
      <div className="mb-10">
        <h2 className="font-[425]">Tell us about you</h2>
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
      <div className="flex flex-col max-w-96">
        <input
          className="border-SoSHColorDisabled px-8 py-2 rounded-2xl mb-8 border "
          placeholder="Username"
          type="text"
          id="fname"
          name="fname"
          onChange={(event) => setUsername(event.target.value)}
        />

        <button
          className={`px-28 py-2 font-black rounded-2xl ${
            username?.length > 0
              ? " bg-SoSHColorPrimary text-white"
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
