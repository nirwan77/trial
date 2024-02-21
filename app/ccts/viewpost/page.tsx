"use client";

import React, { useState } from "react";
import Image from "next/image";
import Heart from "@/components/heart";
import { useRouter } from "next/navigation";

function App(): JSX.Element {
  const [active, setActive] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const router = useRouter();
  return (
    <div>
      <div className="flex fixed top-0 left-0 z-20 bg-white w-screen justify-center flex-col items-center">
        <div className="mb-8 mt-10 font-[425] ">
          <button className="absolute left-4" onClick={() => router.back()}>
            <Image
              priority={true}
              src={"/BackArrowStatus.svg"}
              width={24}
              height={24}
              alt="back arrow"
            />
          </button>
          <h2 className="font-bold leading-Sosh22">Publish a post</h2>
        </div>
      </div>
      <div className="mt-24 flex flex-col items-center bg-green-900 mb-4">
        <div className="relative w-full">
          <Image
            alt="postImage"
            src={"/pending.svg"}
            width={200}
            height={200}
            className="w-full bg-cover"
          />
          <button onClick={() => setShowModal(true)}>
            <Image
              alt="holders"
              src={"/holders.svg"}
              width={84}
              height={60}
              className="fixed left-8 top-32"
            />
          </button>
          <div className="flex justify-between py-8 px-4 items-center text-white text-sm font-bold bg-black leading-Sosh22">
            <p>1 CCT 20 SST $3490</p>
            <Heart active={active} comment={false} />
            <div>
              <Image
                alt=""
                src={"/annotationDots.svg"}
                width={26}
                height={26}
              />
            </div>
            <div>
              <Image alt="" src={"/share.svg"} width={26} height={26} />
            </div>
          </div>
          <div className="flex justify-center py-8 px-5 text-white text-sm font-bold leading-Sosh22">
            Content Certification Token
          </div>
        </div>
      </div>
      <div className="flex gap-2 px-4 ">
        <div>@cutme</div>
        <div>
          I did a good job today.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do asaeiusmod tempor incididunt ut laboresasa!
        </div>
        <div className="w-7">
          <button onClick={() => setActive((prev) => !prev)}>
            <Heart active={active} comment={true} />
          </button>
        </div>
      </div>
      <div
        className={
          `${showModal ? "flex " : "hidden "}` +
          "fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center"
        }
      >
        <div className="py-8 px-2 w-360 border shadow-lg rounded-2xl bg-white">
          <div className="flex flex-col gap-8">
            <div className="flex justify-between px-8">
              <button onClick={() => setShowModal(false)}>
                <Image
                  alt="close icon"
                  src={"/closeIcon.svg"}
                  width={24}
                  height={24}
                />
              </button>
              <div>Holders</div>
              <div>
                <Image
                  alt="close icon"
                  src={"/closeIcon.svg"}
                  width={24}
                  height={24}
                  className="opacity-0"
                />
              </div>
            </div>
            <div className="flex justify-between px-4">
              <div className="flex gap-4 justify-center items-center">
                <div>
                  <Image
                    alt=""
                    src={"/smilingFace.svg"}
                    width={34}
                    height={34}
                    className="bg-cover"
                  />
                </div>
                <p className="text-sm leading-5">@Jaden001</p>
              </div>
              <div className="flex items-center text-sm leading-5">
                Holding 1 CCTs
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
