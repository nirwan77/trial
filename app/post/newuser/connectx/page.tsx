"use client";

import React from "react";
import Image from "next/image";

import { useRouter } from "next/navigation";
import { axios } from "@/lib";

function App(): JSX.Element {
  const router = useRouter();

  const handleSubmit = async () => {
    const a = await axios.post("/twitter");
  };

  return (
    <div className="h-screen flex justify-start flex-col items-center">
      <div className="w-full flex-col flex items-center justify-center">
        <div className="mb-6 mt-10 font-[425] text-white">
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
            Set up profile
          </h2>
        </div>
      </div>
      <div className="w-full flex flex-col items-center mt-11 h-full">
        <div className="bg-green-300 w-80 rounded-3xl flex flex-col items-center gap-[72px] justify-start px-4 py-8 mb-8">
          <h2 className="font-[425] text-sm text-white">Connect X</h2>
          <Image
            className="w-auto"
            priority
            src={"/Twitter.svg"}
            alt="Follow us on Twitter"
            width={40}
            height={40}
          />
          <h2 className="font-[425] text-sm text-center text-white leading-Sosh22">
            Connect your X account with SST for better experience!
          </h2>
          <button
            className="w-full font-bold text-sm text-white"
            onClick={handleSubmit}
          >
            Proceed
          </button>
        </div>
        <button
          className="w-96 font-bold text-sm text-SoSHColorPrimary rounded-2xl p-4 mb-6 border border-SoSHColorPrimary"
          onClick={() => router.push("/post/newuser/publishpost")}
        >
          Skip
        </button>
      </div>
    </div>
  );
}

export default App;
