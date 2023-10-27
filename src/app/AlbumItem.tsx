import Image from "next/image";
import { useState } from "react";

export default function AlbumItem({ image }: {image: string}) {
    const [isLoading, setLoading] = useState(true);
    return (
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
        <Image
          alt=""
          width={200} height={200}
          src={image}
          className={`
              duration-700 ease-in-out group-hover:opacity-75
              ${
                isLoading
                  ? "scale-110 blur-2xl grayscale"
                  : "scale-100 blur-0 grayscale-0"
              })`}
          onLoad={() => setLoading(false)}
        />
      </div>
    );
  }