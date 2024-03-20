"use client";
import { Button } from "@nextui-org/button";
import { cn } from "../lib/utils";
import { audiowide, rubik } from "./fonts";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  return (
    <div className="flex justify-between p-7 sticky top-0 z-50">
      <div className="flex items-center">
        <p className={cn(rubik.className, "text-xl")}>KRUNCH</p>
      </div>
      <div className="flex justify-end">
        <div className="flex gap-2">
          {/* <Button variant="light" radius="none" disableRipple>
                Our Story
              </Button>
              <Button variant="light" radius="none" disableRipple>
                Our Work
              </Button> */}
          <Button
            as={Link}
            variant="shadow"
            radius="none"
            className={cn(
              audiowide.className,
              "hidden md:flex bg-white text-black"
            )}
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
