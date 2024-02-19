"use client";

import React from "react";
import Image from "next/image";

import { useRouter } from "next/navigation";

function App(): JSX.Element {
  const router = useRouter();

  return (
    <div className="h-full flex justify-start flex-col items-center">
      <div className="mb-8 mt-10 font-[425]">
        <button className="absolute left-4" onClick={() => router.back()}>
          <Image
            priority={true}
            src={"/BackArrowStatus.svg"}
            width={24}
            height={24}
            alt="back arrow"
          />
        </button>
        <h2 className="font-black text-sm leading-5">Post published</h2>
      </div>

      <div className="my-8 gap-8 flex flex-col items-center w-80 px-8 py-10">
        <Image
          priority={true}
          src={"/success.svg"}
          width={185}
          height={185}
          alt="back arrow"
        />
        <div className="text-SoshColorGreyScale font-black text-2xl leading-[140%]">
          Success
        </div>
        <div className="text-SoshColorGreyScale font- font-normal text-base leading-5 text-center">
          Your post has published. Share your post and start to earn now.
        </div>
      </div>

      <div className="w-96">
        <div className="flex flex-col m-auto gap-5">
          <button
            className={
              "p-4 w-full rounded-2xl font-black bg-SoSHColorPrimary text-white"
            }
          >
            Check your post
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
