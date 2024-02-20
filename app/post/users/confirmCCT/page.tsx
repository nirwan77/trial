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
        <h2 className="font-black text-sm leading-5">
          Confirm CCT for your post
        </h2>
      </div>

      <div className="flex flex-col gap-4 mb-12">
        <div className="flex gap-4 font-black text-sm leading-5 text-SoshColorGrey600">
          <div className="flex p-4 justify-end items-center gap-2 rounded-2xl bg-SoshColorPopupBannerColor">
            <Image
              className="w-auto"
              priority
              src={"/infoIcon.svg"}
              alt="Follow us on Twitter"
              width={40}
              height={40}
            />
            200 Sosh
          </div>
          <Image
            className="w-auto"
            priority
            src={"/arrow-right.svg"}
            alt="Follow us on Twitter"
            width={24}
            height={24}
          />
          <div className="flex p-4 justify-end items-center gap-2 rounded-2xl bg-SoshColorPopupBannerColor">
            <Image
              className="w-auto"
              priority
              src={"/ETH.svg"}
              alt="Follow us on Twitter"
              width={40}
              height={40}
            />
            1CCT
          </div>
        </div>
        <div className="flex gap-2 font-black text-sm leading-5 text-SoshColorGrey500">
          <Image
            className="w-auto"
            priority
            src={"/transfer.svg"}
            alt="Follow us on Twitter"
            width={22}
            height={22}
          />
          <p>0.2ETH = 200USD</p>
        </div>
      </div>

      <div className="flex flex-col mb-8 py-4 px-8 gap-4 items-start rounded-2xl bg-SoshColorBento">
        <div className="flex gap-10 font-black text-sm leading-5 text-SoshColorGrey600">
          <p>Wallet Balance</p>
          <p>0xx</p>
        </div>
        <div className="font-black text-sm leading-5 SoshColorGrey700">
          1000 Sosh
        </div>
        <div className="flex gap-2 font-black text-xs leading-5 text-SoshColorGrey500">
          <Image
            className="w-auto"
            priority
            src={"/transfer.svg"}
            alt="Follow us on Twitter"
            width={14}
            height={14}
          />
          <p>1ETH = 3490USD</p>
        </div>
      </div>

      <button
        className="p-4 w-96 max-w-96 rounded-2xl font-black bg-SoSHColorPrimary text-white"
        onClick={() => router.push("/post/users/confirmCCT/purchaseCCT")}
      >
        Confirm
      </button>
    </div>
  );
}

export default App;
