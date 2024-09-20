import Link from "next/link";

export default function HomeButton({ destination, children, glow, flipped }) {
  return (
    <Link
      href={destination}
      target="_blank"
      className={`border-gold-main border-2 py-3 px-8 rounded-lg text-xl transition duration-300 ease-in-out hover:shadow-glow my-8 w-full w-fit flex justify-center capitalize ${
        glow && "shadow-glow"
      } ${flipped ? "bg-gold-main text-[#151515]" : "text-gold-main"}`}
    >
      {children}
    </Link>
  );
}
