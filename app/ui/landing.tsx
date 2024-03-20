"use client";

import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import { ArrowRight } from "lucide-react";
import { cn } from "../lib/utils";
import { audiowide, rubik } from "./fonts";
import Link from "next/link";
import { useMediaQuery } from "../lib/hooks/useMediaQuery";
import { Spacer } from "@nextui-org/spacer";

import dynamic from "next/dynamic";

const GlobeComponent = dynamic(
  () => {
    return import("./globe");
  },
  { ssr: false }
);

export function Landing() {
  return (
    <div className="flex flex-col justify-between gap-2">
      <div className="flex flex-col p-5 gap-4">
        <Spacer className="p-10" />
        <div className="flex justify-center relative">
          <div className="flex justify-center gap-4 top-[-50px] absolute z-50">
            {/* <Button variant="bordered" radius="none" disableRipple>
                Our work
              </Button> */}

            <div className="flex flex-col gap-4 items-center">
              <div className="flex flex-col gap-2 text-center">
                <p className="text-6xl font-bold">AI driven product craft</p>
                <p>
                  Krunch provides on-demand product management, engineering and
                  marketing services, using AI and code.
                </p>
              </div>
            </div>
          </div>
          <GlobeComponent />
        </div>
        <div className="flex justify-center">
          <p className="font-gradient text-xl">
            Backed by <img className="inline" width={40} src="500logo.svg" />{" "}
            Global
          </p>
        </div>
        <div className="flex justify-center">
          <Button
            as={Link}
            variant="shadow"
            radius="none"
            className={cn(audiowide.className, "bg-white text-black")}
            disableRipple
            endContent={<ArrowRight />}
            href="https://calendly.com/jordan-chung/krunch-demo"
          >
            Get in touch
          </Button>
        </div>
      </div>
    </div>
  );
}
