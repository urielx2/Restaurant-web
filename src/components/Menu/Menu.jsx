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
    <section className="h-fit rounded-3xl bg-[#111]/70 backdrop-blur-sm ring-1 ring-white/5 p-6 md:p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_20px_60px_rgba(0,0,0,0.35)]">
      <div className="flex items-center gap-3 mb-5">
        <Icon className="w-7 h-7 text-[#D4AF37]" />
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-wide text-[#D4AF37]">
          {title}
        </h2>
      </div>
      <GoldRule />

      <div className="mt-6">
        <div className="space-y-5">
          {items.map((it) => (
            <PriceLine
              key={it.name}
              name={it.name}
              desc={it.desc}
              price={it.price}
            />
          ))}
        </div>

        <div className="mt-6">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {sectionsMenu.map((section) => (
            <Section key={section.title} {...section} />
          ))}
        </div>

        <div className="mt-16 flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
          <span className="text-center text-xs md:text-sm uppercase tracking-[0.2em] text-[#D4AF37]/80">
            Disfruta de nuestros deliciosos sabores
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
        </div>

        <div className="mt-12 flex justify-center">
          <ButtonLink
            href="/orders"
            text="Ordenar ya"
            className="bg-[#D4AF37] text-black font-bold hover:bg-amber-400 shadow-lg shadow-[#D4AF37]/40 px-10 py-4 rounded-xl uppercase tracking-wide transition"
          />
        </div>
      </div>
    </Container>
  );
};
