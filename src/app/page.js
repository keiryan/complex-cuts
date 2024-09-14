import Image from "next/image";
import Button from "@/app/components/Button";
import Socials from "@/app/components/Socials";
import CutsGallery from "./components/CutsGallery";
import ExamplesGallery from "./components/ExamplesGallery";

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col">
      <div className="relative w-full min-h-full bg-cover bg-no-repeat flex flex-col justify-center text-gold-main">
        <Image
          src="/images/home/landing-background.png"
          alt="Complex Cuts Logo"
          fill
          className="w-full h-full absolute brightness-[0.20] object-cover"
        />
        <div className="flex gap-8 w-full flex justify-center z-[1]">
          <div className="flex flex-col">
            <h1 className="text-9xl m-0 p-0 uppercase text-right">
              Complex <br /> Cuts
            </h1>
            <div className="w-full flex justify-end">
              <Socials />
            </div>
          </div>
          <div className="flex flex-col text-2xl gap-2">
            <div>Men's barbershop</div>
            <div>Wilmington, NC</div>
            <Button destination="https://complexcuts.as.me/schedule.php">
              <div className="flex gap-2 items-center">
                {" "}
                <img
                  src="/icons/scissors.svg"
                  alt="Complex Cuts Logo"
                  className=""
                />
                Book Appoinment
              </div>
            </Button>
          </div>
        </div>
      </div>
      <CutsGallery />
      {/* Time for a trim */}
      <div className="w-full flex flex-col items-center">
        <div className="bg-black rounded flex justify-between w-full max-h-96 max-w-screen-xl">
          <div className="flex flex-col gap-8 justify-between pt-8 pl-8">
            <div>
              <div className="text-gold-main text-2xl">Time for a trim?</div>
              <div className="text-[#676665]">
                no one needs to see you looking rough.
              </div>
            </div>
            <Button destination="/">
              <div className="flex items-center gap-2">
                <img src="/icons/scissors.svg" />
                book appointment
              </div>
            </Button>
          </div>
          <div className="h-full w-fit">
            <img
              src="/images/home/trim.png"
              alt="Trim"
              className="h-full object-contain"
            />
          </div>
        </div>

        <ExamplesGallery />
      </div>
    </main>
  );
}
