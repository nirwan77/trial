"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";

const Card = () => {
  const pathname = usePathname();

  const currentUrl = pathname.split("/")[1];

  return (
    <div className="flex flex-col items-center mx-4">
      <div className="flex min-w-[360px] flex-col mb-8 py-4 px-8 gap-4 items-start rounded-2xl sosh__background border border-SoshColorGrey300">
        <div className="leading-Sosh22">My Asset</div>
        <div className="flex justify-between w-full text-SoshColorGrey600">
          <div className="text-sm leading-Sosh22">Holding Account</div>
          <div className="text-sm leading-Sosh22">13 CCT</div>
        </div>
        <div className="flex justify-between w-full text-SoshColorGrey600">
          <div>Holding Value</div>
          <div className="flex flex-col gap-4">
            <div className="text-sm leading-Sosh22">2322 SST</div>
            <div className="text-xs leading-Sosh22">3490 USD</div>
          </div>
        </div>
      </div>

      <div className="flex min-w-[360px] flex-col mb-8 py-4 px-8 gap-4 items-start rounded-2xl sosh__background border border-SoshColorGrey300">
        <div className="leading-Sosh22 flex justify-between w-full">
          <div>My Wallet</div>
          <div>0x2153a18...sa732</div>
        </div>
        <div className="flex justify-between text-SoshColorGrey600 w-full">
          <div className="text-sm leading-Sosh22">Holding Account</div>
          <div className="text-sm leading-Sosh22 flex flex-col gap-4">
            <div>3327 SST</div>
            <div>2.33 ETH</div>
            <div className="text-SoshColorGrey500 text-xs">3490 USD</div>
          </div>
        </div>
        <div className="flex w-full px-4 justify-between">
          <button className="px-8 text-sm leading-Sosh22 py-2 bg-black text-white rounded-lg">
            Stake
          </button>
          <button className="px-8 text-sm leading-Sosh22 py-2 rounded-lg border border-SoshColorGrey700">
            Withdraw
          </button>
        </div>
        <div className="w-full text-sm text-center text-SoshColorGrey600 leading-Sosh22">
          Holding Account
        </div>
      </div>

      <div className="flex min-w-[360px] flex-col mb-8 py-4 px-8 gap-4 items-start rounded-2xl sosh__background border border-SoshColorGrey300">
        <div className="flex justify-between w-full text-SoshColorGrey600">
          <div className="text-sm leading-Sosh22">Holding Account</div>
          <div className="text-sm leading-Sosh22">13 CCT</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
