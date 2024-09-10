"use client";
import { SnackbarProvider, enqueueSnackbar } from "notistack";

import { Check, Mail, User2 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useRef, useState, useTransition } from "react";
import { AddToWaitlist } from "@/actions/waitlist";

// import { useToast } from "@/hooks/use-toast";

export const WaitlistForm = () => {
  const [success, setSuccess] = useState(false);
  const [isPending, startTransition] = useTransition();
  const ref = useRef<HTMLInputElement | null>(null);

  // const { toast } = useToast();

  // AddToWaitlist function

  // onSubmit function
  const onSubmit = async (formData: FormData) => {
    startTransition(() => {
      AddToWaitlist(formData).then((res) => {
        if (res.success) {
          if (ref.current) ref.current.value = "";
          setSuccess(true);
          return;
        }
        if (res.error) {
          enqueueSnackbar(res.error, {
            variant: "error",
            anchorOrigin: { vertical: "top", horizontal: "right" },
          });
          return;
        }
      });
    });
  };
  return (
    <>
      <form action={onSubmit}>
        <div className="flex flex-col sm:flex-col w-full md:w-[32.5rem] gap-y-3 gap-x-4 items-center">
          <div className="bg-white rounded-dm flex  w-full overflow-hidden py-3.5 ">
            <div className="pr-4  pl-5 border-r border-r-black/40">
              <User2 className="text-white fill-primary " />
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
              <Mail className="text-white fill-primary " />
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
            className="max-sm:w-full h-12 disabled:cursor-not-allowed mt-3 py-4 max-sm:h-auto max-sm:rounded-dm"
            disabled={isPending}
          >
            GET EARLY ACCESS
          </Button>
        </div>
      </form>
      <AlertSuccess open={success} onClose={() => setSuccess(false)} />
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
