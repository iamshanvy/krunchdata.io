"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export function LogoCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <div className="flex justify-center">
            <img className="inline" width={500} src="500logo.svg" />
          </div>
        </div>

        <div className="embla__slide">
          <div className="flex justify-center">
            <img className="inline" width={500} src="grab.png" />
          </div>
        </div>
        <div className="embla__slide">
          <div className="flex justify-center">
            <img className="inline" width={500} src="canva.png" />
          </div>
        </div>
        <div className="embla__slide">
          <div className="flex justify-center">
            <img className="inline" width={500} src="reddit.png" />
          </div>
        </div>
        <div className="embla__slide">
          <div className="flex justify-center">
            <img className="inline" width={500} src="udemy.webp" />
          </div>
        </div>
        <div className="embla__slide">
          <div className="flex justify-center">
            <img className="inline" width={500} src="intercom.svg" />
          </div>
        </div>
      </div>
    </div>
  );
}
