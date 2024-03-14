"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Heart from "@/components/heart";
import { useEffect, useState } from "react";

import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";
import FacePile from "@/components/FacePile";
import { HoldersModal } from "@/components/HoldersModal";
import { BuyCCTModal } from "@/components/BuyCCTModal";

interface data {
  data: {
    comments: string[];
    createdAt: string;
    ipfs: string[];
    story: string;
    updatedAt: string;
    url: string[];
    userId: string;
    _id: string;
  }[];
}

const Card = ({ data }: data) => {
  const [option, setOption] = useState<string>("Buy");
  const [cctAmount, setCctAmount] = useState<number>(1);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [postLiked, setPostLiked] = useState<boolean | undefined>();
  const [showHoldersModal, setShowHoldersModal] = useState<boolean>(false);

  const faces = [
    { id: 1, name: "John", imgUrl: "/exampleUser1.svg" },
    { id: 2, name: "Alice", imgUrl: "/exampleUser2.svg" },
    { id: 3, name: "Bob", imgUrl: "/exampleUser3.svg" },
  ];

  const handleDecreaseCCTs = () => {
    if (cctAmount === 0) {
      return;
    }
    setCctAmount((prev) => prev - 1);
  };

  const router = useRouter();

  return (
    <>
      {data.map((cardDetail, idx) => {
        return (
          <div key={idx}>
            <div className="flex flex-col items-center mx-4 mb-8 rounded-3xl sosh__linear-gradient">
              <div className="block relative w-full overflow-x-hidden">
                <div>
                  <div>
                    <div className="absolute top-0 left-0 w-full flex justify-between px-4 py-5 z-50 h-auto">
                      <button onClick={() => setShowHoldersModal(true)}>
                        <FacePile faces={faces} width={60} height={60} />
                      </button>
                      <div className="flex gap-4">
                        <Image
                          alt="share"
                          src={"/share.svg"}
                          width={24}
                          height={24}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div
                    onClick={() =>
                      router.push(`/ccts/viewpost/${cardDetail._id}`)
                    }
                  >
                    <Swiper
                      pagination={{
                        clickable: true,
                      }}
                      modules={[Pagination, EffectCards]}
                      effect={"cards"}
                      grabCursor={true}
                      className="mySwiper rounded-3xl"
                    >
                      {cardDetail &&
                        cardDetail.url.map((image, idx) => (
                          <SwiperSlide key={idx}>
                            <Image
                              priority={true}
                              src={image}
                              width={400}
                              height={400}
                              alt="Images"
                              className="rounded-3xl min-h-72"
                            />
                          </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="absolute bg-transparent pointer-events-none z-50 gap-4 bottom-0 w-full flex justify-between py-4 px-4 items-center text-white text-sm leading-Sosh22">
                      <p className="text-base">1 Certi | $3490 </p>
                      <div className="flex items-center justify-center gap-4">
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() =>
                              setPostLiked((prev) =>
                                prev !== undefined ? !prev : false
                              )
                            }
                          >
                            <Heart
                              active={postLiked || false}
                              comment={false}
                            />
                          </button>
                          <p>90</p>
                        </div>

                        <div className="flex items-center gap-1">
                          <Image
                            alt=""
                            src={"/annotationDots.svg"}
                            width={26}
                            height={26}
                            className="h-auto"
                          />
                          <p>910</p>
                        </div>
                        <div className="flex items-center gap-1">
                          <Image
                            alt=""
                            src={"/barChart.svg"}
                            width={26}
                            height={26}
                            className="h-auto"
                          />
                          <p>2M</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  onClick={() => setShowModal(true)}
                  className="flex justify-center py-4 px-5 text-white text-sm font-bold leading-5"
                >
                  Trade To Earn
                </div>
              </div>
            </div>

            {showModal && (
              <BuyCCTModal updateCCTModalState={() => setShowModal(false)} />
            )}

            {showHoldersModal && (
              <HoldersModal
                updateHoldersModalState={() => setShowHoldersModal(false)}
              />
            )}
          </div>
        );
      })}
    </>
  );
};

export default Card;
