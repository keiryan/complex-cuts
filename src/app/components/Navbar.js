import Link from "next/link";

function NavItem({ href, children }) {
  return (
    <li className="nav-link">
      <Link href={href}>{children}</Link>
    </li>
  );
}

export default function Navbar({ currentPath }) {
  const navItems = [
    {
      href: "https://complexcuts.as.me/schedule.php",
      label: "Book Appointment",
      id: "book-appointment",
    },
    { href: "/services", label: "Services", id: "services" },
    { href: "/#CutsGallery", label: "Gallery", id: "gallery" },
  ];

  console.log("currentPath", currentPath); // Logs the server-side path

  return (
    <nav className="w-full p-4 py-8 absolute top-0 left-0 text-gold-secondary z-[99]">
      <ul className="flex gap-8 justify-center flex-wrap">
        {navItems.map((item) => (
          <NavItem key={item.id} href={item.href}>
            {item.label}
          </NavItem>
        ))}
        <NavItem href="tel:3366469992">Contact</NavItem>
      </ul>
    </nav>
  );
}
