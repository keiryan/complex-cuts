import ImageCard from "@/app/components/ImageCard";
import HomeButton from "@/app/components/HomeButton";
export default function CutsGallery() {
  const cuts = [
    {
      src: "/images/home/full-detail.png",
      alt: "Full Detail",
      title: "Full Detail",
      price: "$60",
    },
    {
      src: "/images/home/haircut.png",
      alt: "Haircut",
      title: "Haircut",
      price: "$35",
    },
    {
      src: "/images/home/kids.png",
      alt: "Kids Cut",
      title: "Kids (6 - 12)",
      price: "$30",
    },
    {
      src: "/images/home/beard-trim.png",
      alt: "Beard Trim",
      title: "Beard Trim",
      price: "$25",
    },
  ];
  return (
    <div className="flex flex-col my-24 px-4">
      <div className="grid grid-rows-2 grid-flow-col gap-8 justify-center my-8">
        {cuts.map((cut) => (
          <ImageCard
            key={cut.title}
            src={cut.src}
            alt={cut.alt}
            width={350}
            height={350}
            title={cut.title}
            price={cut.price}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <HomeButton destination="/">
          <div className="flex items-center gap-2">
            View all services <img src="./icons/arrow.svg" />
          </div>
        </HomeButton>
      </div>
    </div>
  );
}
