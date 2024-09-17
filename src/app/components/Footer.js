import Socials from "@/app/components/Socials";

function ListItem({ children }) {
  return <li className="text-grey-footer text-sm">{children}</li>;
}

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 px-4 w-full flex justify-center mt-32">
      <div className="max-w-screen-xl w-full">
        <div className="flex flex-col lg:flex-row gap-8 justify-between">
          {/* Business Section */}
          <section className="flex flex-col gap-2">
            <h3 className="text-lg sm:text-xl font-semibold">Business</h3>
            <ul className="flex flex-col gap-2 sm:gap-4">
              <ListItem>Complex Cuts</ListItem>
              <ListItem>Joshua Jones</ListItem>
              <ListItem>@2024 Complex Cuts</ListItem>
              <ListItem className="text-sm text-grey-footer">
                All rights reserved.
              </ListItem>
            </ul>
          </section>

          {/* Contact Section */}
          <section className="flex flex-col gap-2">
            <h3 className="text-lg sm:text-xl font-semibold">Contact</h3>
            <ul className="flex flex-col gap-2 sm:gap-4">
              <ListItem>
                <a href="mailto:tre@complexcuts.com" className="hover:underline">tre@complexcuts.com</a>
              </ListItem>
              <ListItem>
                <a href="tel:3366469992" className="hover:underline">(336)-646-9992</a>
              </ListItem>
              <ListItem>
                <Socials size={24} color="#797979" />
              </ListItem>
            </ul>
          </section>

          {/* Address Section */}
          <section className="flex flex-col gap-2">
            <h3 className="text-lg sm:text-xl font-semibold">Address</h3>
            <ul className="flex flex-col gap-2 sm:gap-4">
              <ListItem>The Azalea Station</ListItem>
              <ListItem>1502 Castle St</ListItem>
              <ListItem>Wilmington, NC 28401</ListItem>
            </ul>
          </section>
        </div>
      </div>
    </footer>
  );
}