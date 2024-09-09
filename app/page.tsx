import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import Logo from "@/public/jikoo-logo.svg";
import Delivery from "@/public/jikoo-waitlist.jpg";

export default function Component() {
  return (
    <section className="bg-[#009933] text-white min-h-[100dvh]">
      <div className="flex justify-between items-center px-8 py-4 bg-white">
        <Image src={Logo} alt="Company Logo" className="" />

        <Button className="bg-[#093]">Join the Waitlist</Button>
      </div>
      <div className="container mx-auto px-4 pt-16 md:pt-24 lg:pt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold mb-4 md:text-5xl lg:text-6xl">
              Join the Waitlist
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8">
              Be the first to experience our delicious food delivery service.
            </p>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1 text-sm">
                  Name
                </label>
                <Input id="name" type="text" placeholder="Enter your name" />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 text-sm">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-white text-[#009933] hover:bg-gray-200"
              >
                Join the Waitlist
              </Button>
            </form>
          </div>
          <div className="hidden md:block">
            <Image
              src={Delivery}
              alt="Food Delivery"
              className="rounded-lg"
              style={{ aspectRatio: "500/400", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
