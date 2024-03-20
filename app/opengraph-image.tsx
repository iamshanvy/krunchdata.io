/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Krunch - Product management, marketing and engineering as a service";
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
          backgroundImage:
            "linear-gradient(to bottom right, #E0E7FF 25%, #ffffff 50%, #CFFAFE 75%)",
        }}
      >
        <img
          src={`thumb.png`}
          alt="Krunch Thumbnail"
          tw="w-20 h-20 mb-4 opacity-95"
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
