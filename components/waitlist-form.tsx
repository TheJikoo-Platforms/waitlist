"use client";
import { SnackbarProvider, enqueueSnackbar } from "notistack";

import { Check, Mail, User2 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import { AddToWaitlist } from "@/actions/waitlist";
import { Loader } from "./loader";

export const WaitlistForm = () => {
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const ref = useRef<HTMLInputElement | null>(null);

  const onSubmit = async (formData: FormData) => {
    setIsLoading(true);
    try {
      const res = await AddToWaitlist(formData);

      if (res.success) {
        if (ref.current) ref.current.value = "";
        const nameInput = document.querySelector(
          'input[name="name"]'
        ) as HTMLInputElement;
        const emailInput = document.querySelector(
          'input[name="email"]'
        ) as HTMLInputElement;
        if (nameInput) nameInput.value = "";
        if (emailInput) emailInput.value = "";
        setSuccess(true);
      } else if (res.error) {
        enqueueSnackbar(res.error, {
          variant: "error",
          anchorOrigin: { vertical: "top", horizontal: "right" },
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      enqueueSnackbar("An error occurred. Please try again.", {
        variant: "error",
        anchorOrigin: { vertical: "top", horizontal: "right" },
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    onSubmit(formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col sm:flex-col w-full md:w-[32.5rem] gap-y-3 gap-x-4 items-center pb-6">
          <div className="bg-white rounded-dm flex  w-full overflow-hidden py-3.5 ">
            <div className="pr-4  pl-5 border-r border-r-black/40">
              <User2 className="text-white fill-[#093] " />
            </div>
            <div className="" />
            <input
              ref={ref}
              type="text"
              name="name"
              placeholder="Full Name"
              className=" bg-white text-black grow outline-none rounded-r-dm px-4 text-base md:text-lg lg:text-xl waitlist-input"
              required
            />
          </div>
          <div className="bg-white rounded-dm flex  w-full overflow-hidden py-3.5 ">
            <div className="pr-4  pl-5 border-r border-r-black/40">
              <Mail className="text-white fill-[#093] " />
            </div>
            <div className="" />
            <input
              ref={ref}
              type="email"
              name="email"
              placeholder="Email address"
              className=" bg-white text-black grow outline-none rounded-r-dm px-4 text-base md:text-lg lg:text-xl waitlist-input"
              required
            />
          </div>
          <Button
            type="submit"
            className="max-sm:w-full h-12 disabled:cursor-not-allowed mt-3 py-4 max-sm:h-auto max-sm:rounded-dm"
            disabled={isLoading}
          >
            {isLoading ? "SUBMITTING..." : "GET EARLY ACCESS"}
          </Button>
        </div>
      </form>
      <AlertSuccess open={success} onClose={() => setSuccess(false)} />

      {isLoading && <Loader />}
    </>
  );
};

function AlertSuccess({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <AlertDialog open={open}>
      <AlertDialogContent className="border-white bg-[#272F2B] sm:rounded-dm rounded-dm max-sm:max-w-[313px]">
        <AlertDialogTitle className="hidden">
          Email added succesfully
        </AlertDialogTitle>
        <div>
          <div className="rounded-full grid place-content-center bg-primary/15 size-[57px] md:size-16 mx-auto mb-6 md:mb-6 ">
            <Check className="size-4 md:size-5 text-primary" />
          </div>
        </div>
        <h1 className="text-lg md:text-2xl max-sm:rounded text-white text-center">
          You are on the waitlist!
        </h1>
        <div className="flex justify-center mt-12 md:mt-16">
          <Button onClick={onClose}>THANK YOU</Button>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export const NotiProvider = () => {
  return (
    <div>
      <SnackbarProvider />
      <style>{`
    .notistack-MuiContent-error{
    border-radius: 10px
    }
    `}</style>
    </div>
  );
};
