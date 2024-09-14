import Image from "next/image";
export default function SocialIcon({ href, src, alt }) {
  return (
    <li>
      <a href={href}>
        <Image src={src} alt={alt} width={32} height={32} />
      </a>
    </li>
  );
}
