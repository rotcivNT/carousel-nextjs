import Image from "next/image";

export default function AlbumItem({ image }: { image: string }) {
  return (
    <Image
    fill
      sizes="100%"
      key={image}
      src={image}
      alt=""
      className="object-contain mx-auto duration-700 ease-in-out group-hover:opacity-75"
    />
  );
}
