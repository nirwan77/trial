"use client";

import React from "react";
import Image from "next/image";

import { useRouter } from "next/navigation";

function App(): JSX.Element {
  const router = useRouter();

  return (
    <div className="h-full flex justify-start flex-col items-center">
      <div className="mb-8 mt-10 font-[425]">
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
        <h2 className="font-black text-sm leading-5">
          Purchase CCT for your post
        </h2>
      </div>

      <div className="flex flex-col gap-2 items-center justify-center mb-12 p-4">
        <Image
          className="w-auto"
          priority
          src={"/ETH.svg"}
          alt="ETH"
          width={24}
          height={24}
        />

        <div className="flex gap-2 font-black text-sm leading-5 text-SoshColorGrey600">
          1 CCT
        </div>
        <div className="flex gap-2 font-black text-sm leading-5 text-SoshColorGrey600">
          <Image
            className="w-auto"
            priority
            src={"/transfer.svg"}
            alt="Follow us on Twitter"
            width={22}
            height={22}
          />
          <p>2000 Sosh</p>
        </div>
      </div>

      <div className="flex w-96 flex-col mb-8 py-4 px-8 gap-4 items-start rounded-2xl bg-SoshColorBento">
        <div className="w-full flex justify-between">
          <p className="font-black text-base leading-6 text-SoshColorGrey500">
            Amount Total
          </p>
          <p className="font-black leading-4 text-xs text-SoshColorGrey600">
            1 CCT
          </p>
        </div>
        <div className="w-full flex justify-between">
          <p className="font-black text-base leading-6 text-SoshColorGrey500">
            Sosh Fee
          </p>
          <p className="font-black leading-4 text-xs text-SoshColorGrey600">
            140 Sosh
          </p>
        </div>
        <div className="w-full flex justify-between">
          <p className="font-black text-base leading-6 text-SoshColorGrey500">
            Total
          </p>
          <div className="flex flex-col font-black leading-4 text-xs text-SoshColorGrey600">
            <p>2000 Sosh</p>
            <p>= $40</p>
            <p>= 0.23ETH</p>
          </div>
        </div>
      </div>

      <button
        className="p-4 w-96 max-w-96 rounded-2xl font-black bg-SoSHColorPrimary text-white"
        onClick={() => router.push("")}
      >
        Publish
      </button>
    </div>
  );
}

export default App;
