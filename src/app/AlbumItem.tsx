import Image from "next/image";
import { useState } from "react";

export default function AlbumItem({ image }: { image: string }) {
  const [isLoading, setLoading] = useState(true);
  console.log(isLoading);

  return (
    <>
      {isLoading && (
        <Image
          alt=""
          fill
          className={`
      !w-[600px] blur-2xl grayscale mx-auto
      `}
          src={`/blurImg.jpg`}
        />
      )}
      <Image
        alt=""
        fill
        className={`
              !w-[600px] duration-300 ease-in-out mx-auto
              ${
                isLoading
                  ? "blur-2xl grayscale bg-red-400"
                  : "blur-0 grayscale-0 bg-[none]"
              })`}
        src={image}
        onLoad={() => setLoading(false)}
      />
    </>
  );
}
