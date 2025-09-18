import { IconTrophy } from "@tabler/icons-react";
import { Container } from "../layout/Container/Container";
import { ButtonLink } from "../ui";

export const AboutUs = () => {
  return (
    <Container id="about-us">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20">
        <div className="relative">
          <img
            src="/restaruant.webp"
            alt="restaurant"
            className="w-full h-auto object-cover rounded-2xl"
          />
          <img
            src="/yessi.webp"
            alt="user"
            className="border absolute bottom-0 rounded-full w-20 h-20 object-cover translate-y-3 md:-translate-y-4 md:-translate-x-10"
          />

          <div className="absolute top-0 right-0 flex flex-col justify-center items-center gap-2 bg-primary rounded-xl p-3 md:p-4 -translate-y-10 md:translate-x-10 md:translate-y-5">
            <IconTrophy stroke={1.5} />
            <span className="text-xs">
              +20 años de <br />
              experiencia
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-4">
          <div>
            <span className="text-xs">Acerca de</span>
            <h2 className="text-4xl font-semibold">Excelencia y experiencia</h2>
          </div>
          <p className="text-sm font-light max-w-lg">
            En nuestro restaurante creemos que la buena comida une a las
            personas. Cada platillo está preparado con ingredientes frescos y
            pasión por la cocina, buscando que cada visita sea una experiencia
            llena de sabor, calidez y momentos inolvidables.
          </p>
          <ButtonLink
            href="/orders"
            text="Ordenar ya"
            className="uppercase bg-primary text-white hover:bg-amber-400 shadow-lg shadow-[#D4AF37]/40 self-start"
          />
        </div>
      </div>
    </Container>
  );
};
