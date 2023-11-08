import Image from "next/image";
import { useState } from "react";

export default function AlbumItem({ image, onClick, fill }: { image: string, onClick?:any, fill?: boolean }) {
  const [isLoading, setLoading] = useState(true);
  
  let fillProps =fill ? {
    fill: fill
  } : {width: 145, height:145}
  return (
    <>
      {isLoading && (
        <Image
          alt=""
          {...fillProps}
          className={`blur-2xl grayscale mx-auto
      `}
          src={`/blurImg.jpg`}
        />
      )}
      <Image
        alt=""
        {...fillProps}
        onClick={onClick}
        className={`object-contain duration-300 ease-in-out mx-auto
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
