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
        <h2 className="font-normal leading-Sosh22">Stake ETH</h2>
      </div>

      <div className="flex flex-col gap-2 justify-center items-center mb-8">
        <Image alt="qr" src={"/smallETh.svg"} width={24} height={24} />
        <div className="text-SoshColorGrey600 text-sm leading-Sosh22">
          0.5 ETH
        </div>
        <div className="text-SoshColorGrey600 text-sm leading-Sosh22">
          2000 SST
        </div>
      </div>

      <div className="flex min-w-96 flex-col mb-8 py-4 px-8 gap-4 items-start rounded-2xl sosh__background border border-SoshColorGrey300">
        <div className="flex justify-between w-full text-SoshColorGrey600">
          <div className="text-base leading-Sosh22 text-SoshColorGrey700">
            Network
          </div>
          <div className="text-xs leading-Sosh22">Blast</div>
        </div>
        <div className="flex justify-between w-full text-SoshColorGrey600">
          <div className="text-base leading-Sosh22 text-SoshColorGrey700">
            Expire in
          </div>
          <div className="text-xs leading-Sosh22">3 hr</div>
        </div>
        <div className="flex justify-between w-full text-SoshColorGrey600">
          <div className="text-base leading-Sosh22 text-SoshColorGrey700">
            Total Amount
          </div>
          <div className="text-xs leading-Sosh22">0.531 ETH</div>
        </div>
      </div>

      <div className="w-96">
        <div className="flex flex-col m-auto gap-2">
          <button
            onClick={() => router.push("/account/stakeETH/connectwallet")}
            className={`p-4 w-full rounded-2xl leading-5 text-sm text-white bg-green-500`}
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
