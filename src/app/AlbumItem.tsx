import Image from "next/image";
import { useState } from "react";

export default function AlbumItem({ image, onClick }: { image: string, onClick?:any }) {
  const [isLoading, setLoading] = useState(true);

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
        onClick={onClick}
        className={`
              !w-[600px] duration-300 ease-in-out mx-auto
              ${
                isLoading
                  ? "blur-2xl grayscale"
                  : "blur-0 grayscale-0 bg-[none]"
              })`}
        src={image}
        onLoad={() => setLoading(false)}
      />
    </>
  );
}
