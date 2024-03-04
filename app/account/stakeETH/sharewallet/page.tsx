"use client";

import React, { useState } from "react";
import Image from "next/image";

import { useRouter } from "next/navigation";
import Transfer from "@/components/transfer";

function App(): JSX.Element {
  const [amount, setAmount] = useState<string>("");

  const router = useRouter();

  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const options = ["Option 1", "Option 2", "Option 3"];

  const handleSelect = (option: string) => {
    setSelectedOption(option);
  };

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

      <div className="flex flex-col gap-5 justify-center items-center">
        <Image alt="qr" src={"/qr.svg"} width={243} height={228} />
        <div className="flex gap-2 text-SoshColorGrey500 justify-start items-start leading-Sosh22 max-w-44">
          <Image
            priority={true}
            src={"/alertTriangle.svg"}
            width={24}
            height={24}
            alt="alert triangle"
          />
          Only send ETH to this address
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="text-sm leading-Sosh22 text-SoshColorGrey600">
          Stake Address
        </div>
        <div className="px-8 py-4 w-96 mb-8 rounded-2xl leading-5 text-sm border border-SoSHColorPrimary">
          0x2e1dqdasx0ajxsadadsda212
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
            Copy address
          </button>
          <div className="text-center text-SoshColorGrey600 text-sm leading-Sosh22">
            Or
          </div>
          <button
            onClick={() => router.push("/account/stakeETH/sharewallet")}
            className={
              "p-4 w-full rounded-2xl leading-5 text-sm border border-SoSHColorPrimary"
            }
          >
            Share
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
