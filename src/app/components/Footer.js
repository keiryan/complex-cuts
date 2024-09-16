import Socials from "@/app/components/Socials";

function ListItem({ children }) {
  return <li className="text-grey-footer text-sm">{children}</li>;
}

export default function Footer() {
  return (
    <footer className="bg-black text-white p-8 w-full flex justify-center">
      <div className="max-w-screen-xl w-full">
        <div className="flex gap-4 justify-between">
          <section className="flex flex-col gap-2">
            <h3 className="text-xl">Business</h3>
            <ul className="flex flex-col gap-4">
              <ListItem>Complex Cuts</ListItem>
              <ListItem>Joshua Jones</ListItem>
              <ListItem>@2024 Complex Cuts.</ListItem>
              <ListItem className="footer-grey text-sm">
                All rights reserved.
              </ListItem>
            </ul>
          </section>

          <section className="flex flex-col gap-2">
            <h3 className="text-xl">Contact</h3>
            <ul className="flex flex-col gap-4">
              <ListItem>
                <a href="mailto:tre@complexcuts.com">tre@complexcuts.com</a>
              </ListItem>
              <ListItem>
                {" "}
                <a href="tel:3366469992">(336)-646-9992</a>
              </ListItem>
              <ListItem>
                <Socials size={24} color="#797979" />
              </ListItem>
            </ul>
          </section>

          <section className="flex flex-col gap-2">
            <h3 className="text-xl">Address</h3>
            <ul className="flex flex-col gap-4">
              <ListItem>
                <a href="mailto:tre@complexcuts.com">The Azalea Station</a>
              </ListItem>
              <ListItem>
                {" "}
                <a href="tel:3366469992">1502 Castle St</a>
              </ListItem>
              <ListItem>Wilmington, NC 28401</ListItem>
            </ul>
          </section>
        </div>
      </div>
    </footer>
  );
}
