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
        <h2 className="font-[425] text-SoshColorGrey700 leading-5">
          Purchase CCT for your post
        </h2>
      </div>

      <div className="flex min-w-[360px] flex-col text-white mb-8 py-4 px-8 gap-4 items-start rounded-2xl bg-green-700 border border-SoshColorGrey300">
        <div className="leading-Sosh22 text-2xl flex justify-between w-full">
          <div>200 SST</div>
          <div>1 CCT</div>
        </div>
        <div>200 USD</div>
      </div>

      <div className="flex min-w-[360px] flex-col mb-8 py-4 px-8 gap-4 items-start rounded-2xl sosh__background border border-SoshColorGrey300">
        <div className="leading-Sosh22 text-sm font-normal flex justify-between w-full">
          <div>Wallet Balance</div>
          <div className="flex flex-col gap-4">
            <div>0x3asax...21hx1</div>
            <div className="text-SoshColorGrey700"> 2,140 SST | $2,140</div>
          </div>
        </div>
      </div>

      <button
        className="p-4 w-96 max-w-96 rounded-2xl font-[425] leading-Sosh22 bg-green-700 text-white"
        onClick={() => router.push("/post/users/confirmCCT/purchaseCCT")}
      >
        Stake SST
      </button>
    </div>
  );
}

export default App;
