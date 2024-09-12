import Spinner from "@/public/loader2.gif";
import Image from "next/image";

export const Loader = () => {
  return (
    <div className="fixed top-0 z-[21] left-0 flex h-full w-full items-center justify-center">
      <div className="flex items-center justify-center h-[250px] w-[250px]">
        <Image
          src={Spinner}
          alt="loader"
          className="z-30 h-full w-full"
          unoptimized
        />
      </div>

      <div className="fixed left-0 top-0 z-[22] h-full w-full bg-black/[0.8]"></div>
    </div>
  );
};
