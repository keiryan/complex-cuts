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
        <div className="relative w-full min-h-full bg-cover bg-no-repeat flex flex-col justify-center text-gold-main min-h-screen">
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
              <HomeButton destination="https://complexcuts.as.me/schedule.php">
                <div className="flex gap-2 items-center">
                  {" "}
                  <Image
                    src="/icons/scissors.svg"
                    alt="Complex Cuts Logo"
                    className=""
                    width={24}
                    height={24}
                  />
                  Book Appoinment
                </div>
              </HomeButton>
            </div>
          </div>
        </div>
        <CutsGallery />
        {/* Time for a trim */}
        <div className="w-full flex flex-col items-center p-4">
          <div className="bg-black rounded flex justify-between w-full max-w-screen-xl">
            <div className="flex flex-col gap-8 justify-between pt-8 pl-8 flex-1">
              <div>
                <div className="text-gold-main text-2xl">Time for a trim?</div>
                <div className="text-[#676665] my-6">
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
            <div className="relative h-[400px] w-fit flex-1">
              {" "}
              {/* Adjust width as needed */}
              <Image
                src="/images/home/trim.png"
                alt="Trim"
                fill
                style={{ objectFit: "contain", objectPosition: "right" }}
              />
            </div>
          </div>
          <div className="max-w-screen-xl">
            <ExamplesGallery />
          </div>
        </div>
      </PageContainer>
    </main>
  );
}
