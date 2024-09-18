import Link from "next/link";

export default function ServicesButton({ destination, children }) {
return (
    <button className="border-gold-main py-1 px-8 bg-gold-main text-[#151515] rounded-lg text-lg transition duration-300 ease-in-out hover:shadow-glow my-8 w-full sm:w-fit flex justify-center items-center h-fit">
        <Link href={destination}>{children}</Link>
    </button>
);
}
