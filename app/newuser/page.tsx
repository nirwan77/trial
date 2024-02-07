"use client";

import React, { useState, ChangeEvent } from "react";
import Image from "next/image";
import { MdOutlineChevronLeft } from "react-icons/md";
import { useRouter } from "next/navigation";

function App(): JSX.Element {
  const [file, setFile] = useState<string | undefined>();
  const [username, setUsername] = useState<string>("");

  const router = useRouter();

  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      setFile(URL.createObjectURL(selectedFile));
    }
  }

  return (
    <div className="flex justify-center flex-col items-center">
      <div className="mb-10 mt-4 font-[425]">
        <button
          className="absolute left-4"
          onClick={() => router.push("/home")}
        >
          <MdOutlineChevronLeft size={24} />
        </button>
        <h2 className="font">Set up profile</h2>
      </div>
      <div className="mb-10">
        <h2 className="font-[425]">Tell us about you</h2>
      </div>
      <div className=" relative w-28 h-28 mb-20">
        <Image
          className="object-cover h-full rounded-2xl overflow-hidden"
          src={file || "/ProfilePic.png"}
          width={112}
          height={112}
          alt="uploaded picture"
        />
        <label className="absolute z-20 bottom-0 -right-1 cursor-pointer">
          <Image
            src="/uploadImage.png"
            width={32}
            height={31}
            alt="upload image"
          />
          <input className="hidden" type="file" onChange={handleChange} />
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
          className={`px-28 py-2 rounded-2xl ${
            username?.length > 0
              ? " bg-SoSHColorPrimary text-white"
              : "bg-SoSHColorDisabled text-black"
          }`}
          disabled={username?.length === 0 ? true : false}
          onClick={() => router.push("/home")}
        >
          Proceed
        </button>
      </div>
    </div>
  );
}

export default App;
