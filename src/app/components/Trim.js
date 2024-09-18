import HomeButton from "@/app/components/HomeButton";
import Image from "next/image";
export default function Trim() {
  return (
    <div className="bg-black rounded-lg flex flex-col-reverse md:flex-row gap-2 justify-between w-full max-w-screen-xl overflow-hidden">
      {/* Text Section */}
      <div className="flex flex-col gap-8 justify-between pt-8 pl-8 max-md:pr-8 flex-1">
        <div>
          <div className="text-gold-main text-2xl lg:text-3xl">
            Time for a trim?
          </div>
          <div className="text-[#676665] my-6 text-lg lg:text-xl">
            No one needs to see you looking rough.
          </div>
        </div>
        <div className="flex justify-center w-full">
          <HomeButton destination="/">
            <div className="flex items-center gap-2">
              <Image src="/icons/scissors.svg" width={24} height={24} alt="scissors icon" />
              book <span>appointment</span>
            </div>
          </HomeButton>
        </div>
      </div>
      {/* Image Section */}
      <div className="relative h-[300px] lg:h-[400px] min-h-[400px] w-full lg:w-fit flex-1">
        here
        <Image
          src="/images/home/trim.png"
          alt="Trim"
          fill
          style={{ objectFit: "cover", objectPosition: "right" }}
        />
      </div>
    </div>
  );
}
