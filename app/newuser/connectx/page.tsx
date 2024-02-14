"use client";

import React, { useState, ChangeEvent } from "react";
import Image from "next/image";
import { MdOutlineChevronLeft } from "react-icons/md";
import { useRouter } from "next/navigation";
import { usePrivy } from "@privy-io/react-auth";
import { axios } from "@/lib";

function App(): JSX.Element {
  const { user, linkTwitter, getAccessToken } = usePrivy();
  const [file, setFile] = useState<string | undefined>();

  const router = useRouter();

  const handleSubmit = async () => {
    const a = await axios.post("/twitter");

    console.log(a);
    // const response = await axios.patch("/users", {
    //   linkedAccounts: user?.linkedAccounts,
    // });
  };

  return (
    <div className="h-screen flex justify-start flex-col items-center">
      <div className="mb-10 mt-10 font-[425]">
        <button
          className="absolute left-4"
          onClick={() => router.push("/home")}
        >
          <MdOutlineChevronLeft size={24} />
        </button>
        <h2 className="font">Connect Account</h2>
      </div>
      <div className="mb-10">
        <h2 className="font-[425]">Connect X</h2>
      </div>
      <div className="flex mb-8 gap-8">
        <Image
          className="w-auto"
          priority
          src={"/Twitter.svg"}
          alt="Follow us on Twitter"
          width={40}
          height={40}
        />
        <Image
          className="w-auto"
          priority
          src={"/switchHorizontal.svg"}
          alt="Follow us on Twitter"
          width={24}
          height={24}
        />
        <Image
          className="w-auto"
          priority
          src={"/connectTwitterIcon.svg"}
          alt="Follow us on Twitter"
          width={40}
          height={40}
        />
      </div>

      <div className="flex h-full justify-between flex-col">
        <div className="flex flex-col max-w-96 gap-8">
          <div className="flex px-4 rounded-2xl bg-SoshColorBento py-[18px] gap-2">
            <Image
              className="w-auto"
              priority
              src={"/infoIcon.svg"}
              alt="Follow us on Twitter"
              width={22}
              height={22}
            />
            <p className="text-sm">
              Connect your X account with Sosh for better experience!
            </p>
          </div>

          <button
            className="p-4 rounded-2xl font-black bg-SoSHColorPrimary text-white"
            onClick={handleSubmit}
          >
            Proceed
          </button>
        </div>
        <button
          className="p-4 rounded-2xl mb-6 border border-SoSHColorPrimary"
          onClick={() => router.push("/newuser/publishpost")}
        >
          Skip
        </button>
      </div>
    </div>
  );
}

export default App;
