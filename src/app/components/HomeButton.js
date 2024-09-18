import Link from "next/link";

export default function HomeButton({ destination, children }) {
  return (
    <button className="border-gold-main border-2 py-3 px-8 rounded-lg text-gold-main text-xl transition duration-300 ease-in-out hover:shadow-glow my-8 w-full w-fit flex justify-center">
      <Link href={destination}>{children}</Link>
    </button>
  );
}
