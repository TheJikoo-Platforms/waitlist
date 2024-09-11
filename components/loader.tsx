import Spinner from "@/public/loader.gif";
import Image from "next/image";

export const Loader = () => {
  return (
    <div className="fixed top-0 z-[21] left-0 flex h-full w-full items-center justify-center">
      <div className="flex items-center justify-center h-[350px] w-[350px]">
        <Image
          src={Spinner}
          alt="loader"
          className="z-30 h-full w-full"
          unoptimized
        />
      </div>

      <div className="fixed left-0 top-0 z-[22] h-full w-full bg-black/[0.6]"></div>
    </div>
  );
};
