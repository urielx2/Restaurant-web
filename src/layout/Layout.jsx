import { useState } from "react";
import { navLinks } from "../utils";
import { IconMenu } from "@tabler/icons-react";
import { ButtonLink, MobileMenu, ScrollToTopButton } from "../components";
import { Outlet, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export const Layout = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="container mx-auto px-5 xl:px-0 py-5 flex justify-between items-center">
        <div className="flex-1">
          <Link to="/" className="font-bold text-lg uppercase">
            Logo
          </Link>
        </div>

        <nav className="hidden lg:block">
          <ul className="flex gap-x-10">
            {navLinks.map((link) => (
              <li key={link.id}>
                <HashLink
                  smooth
                  to={link.href}
                  className="font-light uppercase text-sm p-1.5 rounded-md hover:text-primary hover:bg-amber-50 transition-colors duration-300"
                >
                  {link.label}
                </HashLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex gap-x-4 items-center flex-1 justify-end">
          <div className="hidden md:flex">
            <ButtonLink
              href="/orders"
              text="Ordenar"
              className="bg-primary text-white hover:bg-amber-500"
            />
          </div>

          <div
            className="lg:hidden cursor-pointer px-3 py-2 bg-amber-50 hover:bg-amber-50/80 transition-colors duration-300 rounded-md text-primary"
            onClick={() => setOpen(!open)}
          >
            <IconMenu stroke={1.5} />
          </div>
        </div>

        <MobileMenu open={open} setOpen={setOpen} />
      </header>

      <Outlet />

      <footer className="p-5 text-center">
        <span>&copy; Restaurante hamburguesas Erick 2025</span>
      </footer>

      <ScrollToTopButton />
    </>
  );
};
