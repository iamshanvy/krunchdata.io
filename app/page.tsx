import Slider from "react-slick";
import { Landing } from "./ui/landing";
import { LogoCarousel } from "./ui/logo-carousel";
import { cn } from "./lib/utils";
import { audiowide, rubik } from "./ui/fonts";
import { Button } from "@nextui-org/react";
import { ArrowRight } from "lucide-react";
import { Navbar } from "./ui/navbar";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Landing />
      <div className="h-screen flex flex-col gap-4 justify-center relative">
        <div className="flex flex-col md:flex-row justify-around gap-10 p-10">
          <div className="flex flex-col gap-2 max-w-2xl text-center md:text-left">
            <h2 className="font-bold text-4xl">Why us?</h2>
            <p>
              We were the <span className="font-bold text-xl">1%</span> of teams
              in the world that got accepted to the prestigious 500 Startup
              Accelerator program in Silicon Valley, which nurtured tech
              unicorns like{" "}
              <span className="font-bold text-xl">
                Reddit, Canva, Grab, Intercom, Udemy etc.
              </span>{" "}
              Silicon Valley is the birth place of modern tech industry and we
              have learnt their way of building softwares.
            </p>
          </div>
          <div>
            <LogoCarousel />
          </div>
        </div>
      </div>

      <div className="h-screen flex flex-col gap-4 justify-center items-center p-10">
        <div className="flex flex-col gap-20 items-center">
          <h2 className="font-bold text-4xl">We work with</h2>
          <div className="flex flex-wrap justify-center items-center gap-10">
            <img width={200} src="alibaba.png" />
            <img width={200} src="google.png" />

            <img width={200} src="camunda.webp" />
            <img width={200} src="newrelic.png" />
            <img width={200} src="polkadot.png" />
            <img width={200} src="bowtie.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
