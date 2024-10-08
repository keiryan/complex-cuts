import HomeButton from "@/app/components/HomeButton";
import Image from "next/image";
import Socials from "@/app/components/Socials";
import SVG from "@/app/components/SVG";

export default function HomeHero() {
  return (
    <div className="relative w-full min-h-full bg-cover bg-no-repeat flex flex-col justify-center text-gold-main min-h-screen py-24">
      <video
        autoPlay
        muted
        loop
        playsInline
        id="hero-video"
        className="w-full h-full absolute brightness-[0.75] object-cover"
      >
        <source src="/images/home/hero_video.webm" type="video/webm" />
        <source src="/images/home/hero_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="flex flex-col lg:flex-row gap-8 w-full justify-center z-[1] px-4 sm:px-8 lg:px-0">
        {/* Title Section */}
        <div className="flex flex-col">
          <h1 className="text-5xl lg:max-xl:text-7xl l sm:text-7xl lg:text-9xl m-0 p-0 uppercase text-center font-bold lg:text-right">
            Complex <br /> Cuts
          </h1>
          <div className="w-full flex justify-center lg:justify-end mt-4 lg:mt-0">
            <Socials />
          </div>
        </div>
        {/* Info and Booking */}
        <div className="flex flex-col text-xl sm:text-2xl gap-2 text-center lg:text-left">
          <div>Men&apos;s barbershop</div>
          <div>Wilmington, NC</div>
          <div className="sm:flex sm:justify-center w-full max-sm:px-16">
            <div className="md:w-fit">
            <HomeButton destination="https://complexcuts.as.me/schedule.php" glow flipped>
              <div className="flex gap-2 items-center justify-center lg:justify-start">
                {/* <Image
                  src="/icons/scissors.svg"
                  alt="Complex Cuts Logo"
                  width={24}
                  height={24}
                /> */}
                <SVG icon="scissors" color="#151515" size={24} />
                Book <span className="max-md:hidden">appointment</span>
              </div>
            </HomeButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
