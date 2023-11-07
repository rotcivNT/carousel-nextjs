import Image from "next/image";
import { useState } from "react";

export default function AlbumItem({ image }: { image: string }) {
  const [isLoading, setLoading] = useState(true);
  console.log(isLoading);
  
  return (
    <Image
            alt=""
            fill
            className={`
              !w-[600px] duration-700 ease-in-out mx-auto
              ${isLoading ? 'blur-2xl grayscale' : 'blur-0 grayscale-0'})`}
            src={image}
            onLoad={() => setLoading(false)}
          />
  );
}
