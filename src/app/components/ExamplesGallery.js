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
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full overflow-x-clip max-w-screen-xl">
      {images.map((image, index) => (
        <div
          key={image.id}
          className={
            (index % 2 ? "md:translate-x-4 " : "md:-translate-x-4") +
            " relative w-full h-auto aspect-square scale-[1.15] scale-[1.1] mb-16"
          }
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            placeholder="empty"
            sizes="(max-width: 100vw)"
          />
        </div>
      ))}
    </div>
  );
}
