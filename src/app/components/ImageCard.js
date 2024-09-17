import Image from "next/image";
export default function ImageCard({ src, alt, width, height, title, price }) {
  return (
    <div className="flex flex-col gap-2 bg-[#262626] p-3 w-fit relative">
      <Image src={src} alt={alt} width={width} height={height} className="object-cover" />
      <div>{title}</div>
      <div className="text-[#C2C2C2]">{price}</div>
    </div>
  );
}
