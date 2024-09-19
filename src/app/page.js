import CutsGallery from "@/app/components/CutsGallery";
import ExamplesGallery from "@/app/components/ExamplesGallery";
import HomeHero from "@/app/components/HomeHero";
import PageContainer from "@/app/components/PageContainer";
import Trim from "@/app/components/Trim";

export default function Home() {
  return (
    <main className="w-full flex flex-col">
      <PageContainer>
        <HomeHero />
        <CutsGallery />
        <div className="w-full flex flex-col items-center p-4 gap-36">
          <Trim />
          {/* <div className="w-full mt-8 flex justify-center bg-blue-500"> */}
          <ExamplesGallery />
          {/* </div> */}
        </div>
      </PageContainer>
    </main>
  );
}
