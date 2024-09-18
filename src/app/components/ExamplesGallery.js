
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
      {images.map((image) => (
        <div
          key={image.id}
          className={`relative w-full sm:w-1/2 h-auto aspect-square`}
          style={{
            backgroundImage: `url(${image.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      ))}
    </div>
  );
}
