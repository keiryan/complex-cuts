import Image from "next/image";
import HomeButton from "@/app/components/HomeButton";
import Socials from "@/app/components/Socials";

export default function HomeHero() {
  return (
    <div className="relative w-full min-h-full bg-cover bg-no-repeat flex flex-col justify-center text-gold-main min-h-screen">
      <Image
        src="/images/home/landing-background.png"
        alt="Complex Cuts Logo"
        fill
        className="w-full h-full absolute brightness-[0.20] object-cover"
      />
      <div className="flex flex-col lg:flex-row gap-8 w-full justify-center z-[1] px-4 sm:px-8 lg:px-0">
        {/* Title Section */}
        <div className="flex flex-col">
          <h1 className="text-6xl lg:max-xl:text-7xl l sm:text-7xl lg:text-9xl m-0 p-0 uppercase text-center font-bold lg:text-right">
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
            <HomeButton destination="https://complexcuts.as.me/schedule.php">
              <div className="flex gap-2 items-center justify-center lg:justify-start">
                <Image
                  src="/icons/scissors.svg"
                  alt="Complex Cuts Logo"
                  width={24}
                  height={24}
                />
                Book Appointment
              </div>
            </HomeButton>
          </div>
        </div>
      </div>
    </div>
  );
}
