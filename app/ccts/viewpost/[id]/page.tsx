"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Heart from "@/components/heart";
import { useRouter, useParams } from "next/navigation";
import { axios } from "@/lib";
import Loading from "@/app/loading";
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { usePrivy } from "@privy-io/react-auth";
import FacePile from "@/components/FacePile";

interface data {
  comments: string[];
  createdAt: string;
  ipfs: string[];
  story: string;
  updatedAt: string;
  url: string[];
  userId: string;
  likes: string[];
  _id: string;
  views: number;
}

function App(): JSX.Element {
  const [active, setActive] = useState(false);

  const [postLiked, setPostLiked] = useState<boolean | undefined>();
  const [showModal, setShowModal] = useState(false);

  const router = useRouter();
  const param = useParams();

  const [data, setData] = useState<data | undefined>();
  const [isLoading, setLoading] = useState(true);

  const faces = [
    { id: 1, name: "John", imgUrl: "/exampleUser1.svg" },
    { id: 2, name: "Alice", imgUrl: "/exampleUser2.svg" },
    { id: 3, name: "Bob", imgUrl: "/exampleUser3.svg" },
    // Add more faces as needed
  ];

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (param) {
      axios
        .get(`/getPost`, {
          params: param,
        })
        .then((response) => {
          setData(response.data);
          setPostLiked(response.data.likes.includes(user));
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [param]);

  useEffect(() => {
    if (!isLoading) {
      const user = localStorage.getItem("user");
      axios
        .post(
          `/getPost`,
          {
            user: user,
            like: postLiked,
          },
          {
            params: param,
          }
        )
        .then((response) => {
          setData(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, postLiked]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="flex fixed top-0 left-0 z-30 w-screen justify-center flex-col items-center">
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
              <h2 className="font-medium leading-Sosh22">View post</h2>
            </div>
          </div>
          <div className="mt-24 flex flex-col items-center sosh__linear-gradient mb-4">
            <button onClick={() => setShowModal(true)}>
              <div className="absolute left-0 w-full flex justify-between px-4 py-5 z-20 h-auto">
                <FacePile faces={faces} />
                <div className="flex gap-4">
                  <Image
                    alt="share"
                    src={"/share.svg"}
                    width={24}
                    height={24}
                  />
                  <Image alt="dots" src={"/dots.svg"} width={24} height={24} />
                </div>
              </div>
            </button>
            <div className="relative w-full">
              <Swiper
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper relative w-full h-72"
              >
                {data &&
                  data.url.map((image, idx) => (
                    <SwiperSlide key={idx}>
                      <Image
                        alt="postImage"
                        src={image}
                        width={1400}
                        height={1800}
                        className="w-full bg-cover min-h-72"
                      />
                    </SwiperSlide>
                  ))}
                <div className="absolute bg-transparent z-10 gap-4 bottom-0 w-full flex justify-between py-4 px-4 items-center text-white text-sm leading-Sosh22">
                  <p className="text-base">1 Certi | $3490 </p>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() =>
                        setPostLiked((prev) =>
                          prev !== undefined ? !prev : false
                        )
                      }
                    >
                      <Heart active={postLiked || false} comment={false} />
                    </button>
                    <p>90</p>
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
                    </div>
                    <p>2M</p>
                  </div>
                </div>
              </Swiper>

              <div className="flex justify-center py-3 px-4 text-white font-bold leading-Sosh22">
                Trade To Earn
              </div>
            </div>
          </div>
          <div className="flex gap-2 px-4 text-sm leading-Sosh22">
            <div>@cutme</div>
            <div>
              I did a good job today.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do asaeiusmod tempor incididunt ut
              laboresasa!
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
              "fixed inset-0 z-50 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center"
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
                      className="h-auto"
                    />
                  </button>
                  <div>Holders</div>
                  <div>
                    <Image
                      alt="close icon"
                      src={"/closeIcon.svg"}
                      width={24}
                      height={24}
                      className="opacity-0 h-auto"
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
                        className="bg-cover h-auto"
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
        </>
      )}
    </>
  );
}

export default App;
