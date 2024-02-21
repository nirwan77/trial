"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";

const Card = () => {
  const pathname = usePathname();

  const currentUrl = pathname.split("/")[1];

  return (
    <div className="flex flex-col items-center mx-4 rounded-3xl bg-green-900">
      <div>
        <Image
          priority={true}
          src={"/success.svg"}
          width={400}
          height={280}
          alt="back arrow"
          className="rounded-3xl"
        />
        <div className="flex justify-center py-8 px-5 text-white text-sm font-bold leading-5">
          Content Certification Token
        </div>
      </div>
    </div>
  );
};

export default Card;
