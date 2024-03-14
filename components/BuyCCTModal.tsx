import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const BuyCCTModal = ({
  updateCCTModalState,
}: {
  updateCCTModalState: () => void;
}) => {
  const router = useRouter();

  const [option, setOption] = useState<string>("Buy");
  const [cctAmount, setCctAmount] = useState<number>(1);

  const handleDecreaseCCTs = () => {
    if (cctAmount === 0) {
      return;
    }
    setCctAmount((prev) => prev - 1);
  };

  return (
    <div
      className={
        "fixed inset-0 z-[105] bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center"
      }
    >
      <div className="py-8 px-2 w-96 border rounded-3xl sosh__linear-gradient3">
        <div className="flex flex-col">
          <div className="flex justify-end">
            <button onClick={updateCCTModalState}>
              <Image
                alt="close icon"
                src={"/closeIcon.svg"}
                width={24}
                height={24}
                className="h-auto"
              />
            </button>
          </div>
          <div className="p-4">
            <div className="shadow mb-4 w-full relative inline-flex rounded-2xl bg-white cursor-pointer select-none items-center font-bold text-sm">
              <div
                className={`flex items-center justify-center w-1/2 rounded-2xl py-3 w-60% text-sm font-medium ${
                  option === "Buy"
                    ? "text-white sosh__linear-gradient"
                    : "text-body-color"
                }`}
                onClick={() => setOption("Buy")}
              >
                Buy
              </div>
              <div
                onClick={() => setOption("Sell")}
                className={`flex items-center justify-center w-1/2 rounded-2xl py-3 w-60% text-sm font-medium ${
                  option === "Sell"
                    ? "text-white sosh__linear-gradient"
                    : "text-body-color"
                }`}
              >
                Sell
              </div>
            </div>

            <div className="flex justify-between p-2 mb-4">
              <div className="flex flex-col gap-8">
                <div className="text-SoshColorGrey600 leading-5 font-medium">
                  My Balance
                </div>
                <div className="flex gap-2 text-SoshColorGrey600 text-2xl leading-5 items-end">
                  $3490
                </div>
                <div className="text-SoshColorGrey600 text-sm leading-5 font-medium">
                  My Holdings
                </div>
              </div>

              <div className="flex flex-col gap-8 items-end">
                <div className="text-SoshColorGrey500 text-sm leading-5">
                  0x27a1...718sgja
                </div>
                <div className="text-SoshColorGrey600 text-sm leading-5">
                  Asset ID: UXS123
                </div>
                <div className="text-SoshColorGrey600 text-sm leading-5">0</div>
              </div>
            </div>

            <div className="flex rounded-2xl justify-between p-2 mb-4 bg-white bg-opacity-30">
              <button
                onClick={handleDecreaseCCTs}
                className="flex px-4 py-3 rounded-xl bg-white font-bold leading-5 text-sm"
              >
                -
              </button>
              <div className="flex flex-col justify-center items-center">
                <span className="text-SoshColorGrey500 text-2xl leading-5 font-bold">
                  {cctAmount}
                </span>
                <span className="text-SoshColorGrey500 text-xs text-end leading-rounded-xl">
                  CCT
                </span>
              </div>
              <button
                onClick={() => setCctAmount((prev) => prev + 1)}
                className="flex px-4 py-3 rounded-2xl bg-white font-bold leading-5 text-sm"
              >
                +
              </button>
            </div>

            <div className="flex justify-between p-2 mb-6">
              <div className="flex flex-col gap-2">
                <div className="text-SoshColorGrey600 leading-Sosh22 font-medium">
                  Total Cost
                </div>
                <div className="flex gap-4 items-center">
                  <span className="text-SoshColorGrey600 text-2xl leading-Sosh22">
                    $2000
                  </span>
                  <span className="text-SoshColorGrey600 font-medium leading-Sosh22">
                    20 SST
                  </span>
                </div>
              </div>
            </div>

            <div>
              <button
                onClick={() => router.push("/ccts/purchaseCCT/status")}
                className="w-full font-bold px-16 py-4 sosh__linear-gradient text-white rounded-2xl"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
