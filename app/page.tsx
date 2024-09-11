// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";

// import Logo from "@/public/jikoo-logo.svg";
// import Delivery from "@/public/jikoo-waitlist.jpg";

// export default function Component() {
//   return (
//     <section className="bg-[#009933] text-white min-h-[100dvh]">
//       <div className="flex justify-between items-center px-8 py-4 bg-white">
//         <Image src={Logo} alt="Company Logo" className="" />

//         <Button className="bg-[#093]">Join the Waitlist</Button>
//       </div>
//       <div className="container mx-auto px-4 pt-16 md:pt-24 lg:pt-32">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//           <div className="flex flex-col justify-center">
//             <h1 className="text-4xl font-bold mb-4 md:text-5xl lg:text-6xl">
//               Join the Waitlist
//             </h1>
//             <p className="text-lg md:text-xl lg:text-2xl mb-8">
//               Be the first to experience our delicious food delivery service.
//             </p>
//             <form className="space-y-4">
//               <div>
//                 <label htmlFor="name" className="block mb-1 text-sm">
//                   Name
//                 </label>
//                 <Input id="name" type="text" placeholder="Enter your name" />
//               </div>
//               <div>
//                 <label htmlFor="email" className="block mb-1 text-sm">
//                   Email
//                 </label>
//                 <Input
//                   id="email"
//                   type="email"
//                   placeholder="Enter your email"
//                   className="w-full"
//                 />
//               </div>
//               <Button
//                 type="submit"
//                 className="w-full bg-white text-[#009933] hover:bg-gray-200"
//               >
//                 Join the Waitlist
//               </Button>
//             </form>
//           </div>
//           <div className="hidden md:block">
//             <Image
//               src={Delivery}
//               alt="Food Delivery"
//               className="rounded-lg"
//               style={{ aspectRatio: "500/400", objectFit: "cover" }}
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";
import type { Metadata } from "next";

import Logo from "@/public/logo.png";
import { WaitlistForm, NotiProvider } from "@/components/waitlist-form";

export const metadata: Metadata = {
  title: "Jikoo Waitlist",
  description:
    "Join our waitlist for a redefined online food ordering experience!",
  //   url: "https://jikoo.ng/waitlist", // Replace with your actual waitlist URL
  //   images: "https://jikoo.ng/_next/image?url=%2Fwaitlist.png&w=640&q=100", // Replace with your waitlist image URL
  openGraph: {
    type: "website",
    url: "https://jikoo.ng/waitlist",
    title: "Jikoo Waitlist",
    description:
      "Join our waitlist for a redefined online food ordering experience!",
    images: ["https://jikoo.ng/_next/image?url=%2Fwaitlist1.png&w=640&q=100"],
  },
  twitter: {
    // card: "summary_large_image",
    title: "Jikoo Waitlist",
    description:
      "Join our waitlist for a redefined online food ordering experience!",
    creator: "@_annonnymouss_",
    images: ["https://jikoo.ng/_next/image?url=%2Fwaitlist1.png&w=640&q=100"],
  },
};

export default function Waitlist() {
  return (
    <div className="min-h-dvh  waitlist_bg text-white  pt-14 max-sm400:pt-10 md:pt-20 overflow-hidden w-full  relative flex flex-col">
      <div className="md:hidden rounded-[20px] h-[200px] sm:h-[250px] overflow-hidden mb-8 sm400:mb-9 px-6">
        <Image
          alt="waitList_Image"
          height={200}
          width={400}
          src={"/waitlist1.png"}
          className=" h-full w-full rounded-[20px]"
          quality={100}
          priority
        />
      </div>
      <div className="flex justify-center max-md:hidden mb-16">
        <Image
          alt="logo"
          height={Logo.height}
          width={Logo.width}
          src={Logo.src}
          className="h-[30px] w-auto"
          quality={100}
          priority
        />
      </div>
      <div className="text-center flex md:items-center flex-col px-6 z-10">
        <h1 className="font-bold text-center text-[28px]/[32px] sm:text-4xl md:text-5xl lg:text-6xl/[68px] max-sm400:text-2xl">
          Get Notified First <br /> When We{" "}
          <span className="text-primary">Launch.</span>
        </h1>
        <h2 className="md:w-[460px] text-sm sm:text-lg md:text-xl max-sm:max-w-[231px] mt-4 sm400:mt-6 mx-auto mb-6 md:mb-8 ">
          Join our waitlist to be the first ro receive updates about our launch
        </h2>
        <WaitlistForm />
      </div>
      <div className="flex justify-center md:hidden absolute bottom-14 sm400:bottom-20 left-0 w-full z-20">
        <Image
          alt="logo"
          height={Logo.height}
          width={Logo.width}
          src={Logo.src}
          className="h-6 w-auto"
          quality={100}
          priority
        />
      </div>
      <div
        className="mt-auto h-[120px] w-[110%] sm400:h-[140px] sm:h-[150px] md:translate-y-1/3  rounded-t-full md:rounded-t-[40%]  bg-transparent relative -left-[5%] "
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, #272f2B 70%, transparent 71%)",
          /* Adjust colors and dimensions */
        }}
      ></div>
      <NotiProvider />
    </div>
  );
}
