import { ButtonLink } from "../ui";

export const Hero = () => {
  return (
    <section
      className="bg-cover bg-center"
      style={{ backgroundImage: "url('/background.webp')" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        <div className="xl:max-w-xl mx-auto w-full px-5 md:px-2 flex justify-center items-center">
          <div className="text-center lg:text-start py-10 md:py-5 flex flex-col gap-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              Bienvenido a Hamburguesas Erick
            </h1>
            <p className="text-xs md:text-sm text-balance max-w-md mx-auto lg:mx-0 w-full">
              Nuestro restaurante es un espacio donde la tradición y el sabor se
              encuentran en cada plato. Disfruta de platillos preparados con
              ingredientes frescos, un ambiente cálido y un servicio atento que
              harán de tu visita una experiencia especial.
            </p>

            <div className="flex gap-4 justify-center lg:justify-start">
              <ButtonLink
                href="/orders"
                text="Ordenar ya"
                className="uppercase bg-primary text-white hover:bg-amber-400 shadow-lg shadow-[#D4AF37]/40"
              />
              <ButtonLink
                href="#menu"
                text="Ver menu"
                className="uppercase border text-white hover:bg-white hover:text-black"
              />
            </div>
          </div>
        </div>
        <div>
          <img
            src="/hamburguesa.webp"
            alt="background"
            className="w-full h-auto md:h-[546px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};
