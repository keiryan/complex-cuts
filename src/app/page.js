import Image from "next/image";
import HomeButton from "@/app/components/HomeButton";
import Socials from "@/app/components/Socials";
import CutsGallery from "./components/CutsGallery";
import ExamplesGallery from "./components/ExamplesGallery";
import PageContainer from "@/app/components/PageContainer";

export default function Home() {
  return (
    <main className="w-full flex flex-col">
      <PageContainer>
        {/* Hero Section */}
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
              <h1 className="text-6xl lg:max-xl:text-7xl l sm:text-7xl lg:text-9xl m-0 p-0 uppercase text-center lg:text-right">
                Complex <br /> Cuts
              </h1>
              <div className="w-full flex justify-center lg:justify-end mt-4 lg:mt-0">
                <Socials />
              </div>
            </div>
            {/* Info and Booking */}
            <div className="flex flex-col text-xl sm:text-2xl gap-2 text-center lg:text-left">
              <div>Men's barbershop</div>
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

        {/* Cuts Gallery */}
        <CutsGallery />

        {/* "Time for a Trim" Section */}
        <div className="w-full flex flex-col items-center p-4">
          <div className="bg-black rounded flex flex-col lg:flex-row justify-between w-full max-w-screen-xl overflow-hidden">
            {/* Text Section */}
            <div className="flex flex-col gap-8 justify-between pt-8 pl-8 flex-1">
              <div>
                <div className="text-gold-main text-2xl lg:text-3xl">
                  Time for a trim?
                </div>
                <div className="text-[#676665] my-6 text-lg lg:text-xl">
                  No one needs to see you looking rough.
                </div>
              </div>
              <HomeButton destination="/">
                <div className="flex items-center gap-2">
                  <Image src="/icons/scissors.svg" width={24} height={24} />
                  book appointment
                </div>
              </HomeButton>
            </div>
            {/* Image Section */}
            <div className="relative h-[300px] lg:h-[400px] w-full lg:w-fit flex-1">
              <Image
                src="/images/home/trim.png"
                alt="Trim"
                fill
                style={{ objectFit: "contain", objectPosition: "right" }}
              />
            </div>
          </div>
          {/* Examples Gallery */}
          <div className="w-full max-w-screen-xl mt-8">
            <ExamplesGallery />
          </div>
        </div>
      </PageContainer>
    </main>
  );
}
