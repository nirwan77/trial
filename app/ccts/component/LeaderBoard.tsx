"use client";

import Loading from "@/app/loading";
import { BuyCCTModal } from "@/components/BuyCCTModal";
import FacePile from "@/components/FacePile";
import { HoldersModal } from "@/components/HoldersModal";
import { axios } from "@/lib";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface data {
  comments: string[];
  createdAt: string;
  ipfs: string[];
  story: string;
  updatedAt: string;
  url: string[];
  userId: string;
  _id: string;
}

const LeaderBoard = () => {
  const [option, setOption] = useState<string>("Buy");
  const [cctAmount, setCctAmount] = useState<number>(1);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showHoldersModal, setShowHoldersModal] = useState<boolean>(false);
  const [data, setData] = useState<data[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/leaderBoard")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleDecreaseCCTs = () => {
    if (cctAmount === 0) {
      return;
    }
    setCctAmount((prev) => prev - 1);
  };

  const handleShowModal = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    setShowModal(true);
    e.stopPropagation();
  };

  const router = useRouter();

  const faces = [
    { id: 1, name: "John", imgUrl: "/exampleUser1.svg" },
    { id: 2, name: "Alice", imgUrl: "/exampleUser2.svg" },
    { id: 3, name: "Bob", imgUrl: "/exampleUser3.svg" },
  ];

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        data &&
        data.map((detail, idx) => {
          return (
            <div key={idx} className="w-96 m-auto flex flex-col gap-4">
              <div className="flex w-full justify-between mb-4">
                <div
                  style={{ backgroundImage: `url(${detail.url[0]})` }}
                  className="px-3 text-white h-[83px] flex items-center bg-cover rounded-xl"
                >
                  #{idx + 1}
                </div>
                <div
                  style={{ backgroundImage: `url(${detail.url[0]})` }}
                  className="p-4 rounded-xl flex gap-2 bg-cover"
                >
                  <div className="flex items-center">
                    <button
                      onClick={() => setShowHoldersModal(true)}
                      className="w-14 pl-4"
                    >
                      <FacePile faces={faces} width={32} height={32} />
                    </button>
                  </div>
                  <div
                    onClick={() => router.push(`/ccts/viewpost/${detail._id}`)}
                    className="flex flex-col gap-2"
                  >
                    <div className="flex gap-2 items-center">
                      <div className="text-white font-bold text-lg leading-Sosh22">
                        $20
                      </div>
                      <div className="w-28 h-[1px] bg-white"></div>
                      <button
                        onClick={(e) => handleShowModal(e)}
                        className="px-2 rounded-xl bg-white py-[2px] text-sm font-bold text-SoSHColorPrimary"
                      >
                        Trade
                      </button>
                    </div>
                    <div className="flex text-sm text-white items-center gap-4">
                      <div className="flex gap-1 leading-Sosh22">
                        <div>67</div>
                        <Image
                          alt=""
                          src={"/users.svg"}
                          width={18}
                          height={18}
                        />
                      </div>
                      <div>117 minted</div>
                      <div className="flex gap-1 leading-Sosh22">
                        <div>2M</div>
                        <Image
                          alt=""
                          src={"/barChart.svg"}
                          width={18}
                          height={18}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {showHoldersModal && (
                <HoldersModal
                  updateHoldersModalState={() => setShowHoldersModal(false)}
                />
              )}

              {showModal && (
                <BuyCCTModal updateCCTModalState={() => setShowModal(false)} />
              )}
            </div>
          );
        })
      )}
    </>
  );
};

export default LeaderBoard;
