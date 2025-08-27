import { ButtonLink } from "../ui";

export const Hero = () => {
  return (
    <main
      className="bg-cover bg-center"
      style={{ backgroundImage: "url('/background.webp')" }}
    >
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        <div className="xl:max-w-xl mx-auto w-full px-3 md:px-2 flex justify-center items-center">
          <div className="text-center lg:text-start py-10 md:py-5 flex flex-col gap-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              Bienvenido a tu restaurante
            </h1>
            <p className="text-xs max-w-md mx-auto lg:mx-0 w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation
            </p>

            <div className="flex gap-4 justify-center lg:justify-start">
              <ButtonLink
                href="#"
                text="Ordenar ya"
                className="uppercase bg-primary text-white hover:bg-amber-500"
              />
              <ButtonLink
                href="#"
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
      </section>
    </main>
  );
};
