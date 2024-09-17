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
    <div className="flex flex-col items-center my-24 px-4">
      {/* Mobile: Single column, Larger screens: Two-column grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 my-8">
        {cuts.map((cut) => (
          <ImageCard
            key={cut.title}
            src={cut.src}
            alt={cut.alt}
            title={cut.title}
            price={cut.price}
            width={400}
            height={400}
          />
        ))}
      </div>
      
      {/* Full-width button on mobile */}
      <div className="flex justify-center">
        <HomeButton destination="/">
          <div className="flex items-center gap-2">
            View all services <img src="./icons/arrow.svg" alt="arrow" />
          </div>
        </HomeButton>
      </div>
    </div>
  );
}