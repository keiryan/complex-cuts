import PageContainer from "@/app/components/PageContainer";
import ServicesButton from "@/app/components/ServicesButton";
import SVG from "@/app/components/SVG";

function Service({ title, price, duration }) {
  return (
    <div className="flex flex-col sm:flex-row justify-between text-gold-main text-lg sm:text-2xl border-b-2 border-gold-main pb-4 sm:pb-1">
      <div className="flex flex-col gap-2">
        <h2 className="font-bold text-2xl sm:text-3xl max-w-[100%]">{title}</h2>
        <div className="flex gap-2 text-base sm:text-xl">
          <p>{duration} &#x2022;</p>
          <p>{price}</p>
        </div>
      </div>
      <div className="mt-4 sm:mt-0 flex justify-start sm:justify-end">
        <ServicesButton destination="https://complexcuts.as.me/schedule.php">
          <div className="flex items-center gap-2">
            <span>Book</span>
            <SVG icon="right-arrow" color="#151515" size={24} />
          </div>
        </ServicesButton>
      </div>
    </div>
  );
}

export default function Services() {
  const services = [
    {
      title: "Full Detail second line",
      price: "$60",
      duration: "1 hour 15 minutes",
      id: "full-detail",
    },
    {
      title: "Kids (6 - 12)",
      price: "$30",
      duration: "40 minutes",
      id: "kids",
    },
    {
      title: "Haircut + Facial Hair",
      price: "$50",
      duration: "1 hour",
      id: "haircut-facial-hair",
    },
    {
      title: "Haircut + Eybrows",
      price: "$60",
      duration: "45 minutes",
      id: "haircut-eyebrows",
    },
    {
      title: "Beard Trim",
      price: "$25",
      duration: "30 minutes",
      id: "beard-trim",
    },
    {
      title: "Eyebrows only",
      price: "$15",
      duration: "20 minutes",
    },
    {
      title: "Same day (Squeeze in)",
      price: "$60",
      duration: "45 minutes",
    },
    {
      title: "Before/After hours haircut",
      price: "$60",
      duration: "45 minutes",
    },
    {
      title: "Before/After hours haircut + facial hair",
      price: "$45",
      duration: "45 minutes",
    },
  ];

  return (
    <PageContainer>
      <div className="w-full py-12 sm:py-24 flex justify-center">
        <h1 className="text-5xl sm:text-7xl text-gold-main mt-24 sm:mt-36 mb-8 sm:mb-12">
          Services
        </h1>
      </div>

      <ul className="flex flex-col gap-12 sm:gap-24 max-w-full sm:max-w-4xl mx-auto px-4">
        {services.map((service) => (
          <Service key={service.id} {...service} />
        ))}
      </ul>
    </PageContainer>
  );
}
