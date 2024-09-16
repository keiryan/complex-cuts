import SocialIcon from "@/app/components/SocialIcon";

export default function Socials({ color, size }) {
  const socialIcons = [
    {
      href: "https://www.facebook.com/ComplexCutsBarbershop",
      src: "/icons/facebook.svg",
      alt: "Facebook Icon",
      id: "facebook",
    },
    {
      href: "https://www.instagram.com/complexcutsbarbershop/",
      src: "/icons/instagram.svg",
      alt: "Instagram Icon",
      id: "instagram",
    },
    {
      href: "https://www.youtube.com/channel/UCVQZ5h6i1J3zK8p8J2y8Y7Q",
      src: "/icons/youtube.svg",
      alt: "Youtube Icon",
      id: "youtube",
    },
    {
      href: "https://www.tiktok.com/@complexcutsbarbershop",
      src: "/icons/tiktok.svg",
      alt: "Tiktok Icon",
      id: "tiktok",
    },
  ];
  return (
    <ul className="flex gap-4 w-fit">
      {socialIcons.map((icon) => (
        <SocialIcon
          key={icon.id}
          href={icon.href}
          alt={icon.alt}
          color={color}
          size={size}
          icon={icon.id}
        />
      ))}
    </ul>
  );
}
