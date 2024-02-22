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

      <div className="flex flex-col py-8 gap-4 rounded-2xl min-w-[360px] bg-green-700 items-center justify-center mb-11 p-4">
        <Image
          className="w-auto"
          priority
          src={"/ETH.svg"}
          alt="ETH"
          width={64}
          height={85}
        />

        <div className="flex gap-2 text-2xl leading-5 text-white">1 CCT</div>
        <div className="flex gap-2 leading-5 text-white">
          <Image
            className="w-auto stroke-white"
            priority
            src={"/transfer.svg"}
            alt="Follow us on Twitter"
            width={22}
            height={22}
          />
          <p>2000 Sosh</p>
        </div>
      </div>

      <div className="flex min-w-[360px] flex-col mb-8 py-4 px-8 gap-4 items-start rounded-2xl sosh__background border border-SoshColorGrey300">
        <div className="flex justify-between w-full text-SoshColorGrey600">
          <div className="text-sm leading-Sosh22 text-black">Amount Total</div>
          <div className="text-xs leading-Sosh22">1 CCT</div>
        </div>
        <div className="flex justify-between w-full text-SoshColorGrey600">
          <div className="text-sm leading-Sosh22">Tax Fee</div>
          <div className="text-xs leading-Sosh22">140 SST | $140 </div>
        </div>
        <div className="flex justify-between w-full text-SoshColorGrey600">
          <div className="text-sm leading-Sosh22 text-black">Total Cost</div>
          <div className="text-xs leading-Sosh22">2000 SST | $120</div>
        </div>
      </div>

      <button
        className="p-4 w-96 text-sm max-w-96 rounded-2xl font-[425] leading-Sosh22 bg-green-700 text-white"
        onClick={() => router.push("/post/users/poststatus")}
      >
        Purchase
      </button>
    </div>
  );
}

export default App;
