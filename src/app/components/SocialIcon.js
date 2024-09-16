import SVG from "./SVG";
export default function SocialIcon({ href, src, alt, icon, color }) {
  return (
    <li>
      <a href={href}>
        <SVG icon={icon} color={color} />
      </a>
    </li>
  );
}
