import { Container } from "../layout";
import { ButtonLink } from "../ui";
import { sectionsMenu } from "../../utils/sectionsMenu";

function GoldRule() {
  return <div className="h-px w-full bg-[#D4AF37]/60" />;
}

function PriceLine({ name, desc, price }) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-2">
          <h3 className="text-lg font-semibold tracking-tight">{name}</h3>
          <div className="flex-1 border-b border-dashed border-white/15 translate-y-[2px]" />
          <span className="text-[#D4AF37] text-lg font-bold whitespace-nowrap">
            {price}
          </span>
        </div>
        <p className="text-sm text-white/70 leading-snug mt-1">{desc}</p>
      </div>
    </div>
  );
}

function DishImage({ src, alt }) {
  return (
    <div className="relative rounded-2xl border border-[#D4AF37]/60 p-1 bg-gradient-to-b from-[#191919] to-[#0f0f10] shadow-[0_6px_30px_rgba(0,0,0,0.4)]">
      <img
        src={src}
        alt={alt}
        className="w-full h-40 md:h-44 object-cover rounded-xl"
      />
    </div>
  );
}

function Section({ title, icon: Icon, items }) {
  return (
    <section className="rounded-3xl bg-[#111]/70 backdrop-blur-sm ring-1 ring-white/5 p-6 md:p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_20px_60px_rgba(0,0,0,0.35)]">
      <div className="flex items-center gap-3 mb-5">
        <Icon className="w-7 h-7 text-[#D4AF37]" />
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-wide text-[#D4AF37]">
          {title}
        </h2>
      </div>
      <GoldRule />

      <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
        <div className="md:col-span-7 space-y-5">
          {items.map((it) => (
            <PriceLine
              key={it.name}
              name={it.name}
              desc={it.desc}
              price={it.price}
            />
          ))}
        </div>

        <div className="md:col-span-5 space-y-5">
          {items.map(
            (it) =>
              it.img && <DishImage key={it.name} src={it.img} alt={it.name} />
          )}
        </div>
      </div>
    </section>
  );
}

export const Menu = () => {
  return (
    <Container id="menu">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10 md:mb-14">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Menú
          </h1>
          <p className="text-white/60 mt-2">Restaurante No.1 en Zaragoza</p>
        </header>

        <div className="space-y-10 md:space-y-12">
          {sectionsMenu.map((section) => (
            <Section key={section.title} {...section} />
          ))}
        </div>

        <div className="mt-12 flex items-center gap-3">
          <div className="h-px flex-1 bg-[#D4AF37]/40" />
          <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37]/80">
            Disfruta de nuestros deliciosos sabores
          </span>
          <div className="h-px flex-1 bg-[#D4AF37]/40" />
        </div>

        <div className="mt-10 flex justify-center">
          <ButtonLink
            href="/orders"
            text="Ordenar ya"
            className="bg-primary text-white hover:bg-amber-500 uppercase w-full md:w-fit text-center"
          />
        </div>
      </div>
    </Container>
  );
};
