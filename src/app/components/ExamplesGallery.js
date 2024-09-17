import Image from "next/image";

export default function ExamplesGallery() {
  const images = [
    {
      src: "/images/home/example1.png",
      alt: "Example 1",
      id: "example1",
    },
    {
      src: "/images/home/example2.png",
      alt: "Example 2",
      id: "example2",
    },
    {
      src: "/images/home/example3.png",
      alt: "Example 3",
      id: "example3",
    },
    {
      src: "/images/home/example4.png",
      alt: "Example 4",
      id: "example4",
    },
  ];

  return (
    <div className="flex flex-wrap w-full">
      {images.map((image, index) => (
        <div
          key={image.id}
          className={`relative w-full sm:w-1/2 h-auto aspect-square ${
            index % 3 ? "bg-blue-500" : "bg-red-500"
          }`}
          style={{
            backgroundImage: `url(${image.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* <Image
            src={image.src}
            alt={image.alt}
            className="object-cover"
            layout="fill"
          /> */}
        </div>
      ))}
    </div>
  );
}
