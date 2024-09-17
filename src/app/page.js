import CutsGallery from "@/app/components/CutsGallery";
import ExamplesGallery from "@/app/components/ExamplesGallery";
import PageContainer from "@/app/components/PageContainer";
import Trim from "@/app/components/Trim";
import HomeHero from "@/app/components/HomeHero";
export default function Home() {
  return (
    <main className="w-full flex flex-col">
      <PageContainer>
        <HomeHero />
        <CutsGallery />
        <div className="w-full flex flex-col items-center p-4">
          <Trim />
          <div className="w-full max-w-screen-xl mt-8">
            <ExamplesGallery />
          </div>
        </div>
      </PageContainer>
    </main>
  );
}
