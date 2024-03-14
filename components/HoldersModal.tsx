import Image from "next/image";
import { useRouter } from "next/navigation";

export const HoldersModal = ({
  updateHoldersModalState,
}: {
  updateHoldersModalState: () => void;
}) => {
  const router = useRouter();

  return (
    <div className="fixed inset-0 z-[105] bg-gray-600 bg-opacity-5 overflow-y-auto h-full w-full flex items-center justify-center">
      <div className="py-8 px-2 w-360 border shadow-lg rounded-2xl bg-white">
        <div className="flex flex-col gap-8">
          <div className="flex justify-between px-8">
            <Image
              alt="close icon"
              src={"/closeIcon.svg"}
              width={24}
              height={24}
              className="opacity-0 h-auto"
            />
            <div className="text-SoshColorGrey700 font-medium leading-Sosh22">
              Holders
            </div>
            <button onClick={updateHoldersModalState}>
              <Image
                alt="close icon"
                src={"/closeIcon.svg"}
                width={24}
                height={24}
                className="h-auto"
              />
            </button>
          </div>

          <div
            className="flex justify-between px-4"
            onClick={() => router.push("account/otherAccount")}
          >
            <div className="flex gap-4 justify-center text-SoshColorGrey700 items-center">
              <div>
                <Image
                  alt=""
                  src={"/exampleUser1.svg"}
                  width={34}
                  height={34}
                  className="bg-cover h-auto"
                />
              </div>
              <p className="text-sm leading-5">@Kevin001</p>
            </div>
            <div className="flex items-center text-sm leading-5">
              Holding 1 CCTs
            </div>
          </div>

          <div
            className="flex justify-between px-4"
            onClick={() => router.push("account/otherAccount")}
          >
            <div className="flex gap-4 justify-center items-center">
              <div>
                <Image
                  alt=""
                  src={"/exampleUser2.svg"}
                  width={34}
                  height={34}
                  className="bg-cover h-auto"
                />
              </div>
              <p className="text-sm leading-5 text-SoshColorGrey700">
                @Alan001
              </p>
            </div>
            <div className="flex items-center text-SoshColorGrey700 text-sm leading-5">
              Holding 1 CCTs
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
