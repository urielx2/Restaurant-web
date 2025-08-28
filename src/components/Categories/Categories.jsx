import { categories } from "../../utils";
import { Container } from "../layout";

export const Categories = () => {
  return (
    <div className="bg-secondary text-black">
      <Container>
        <h2 className="text-3xl font-semibold text-center mb-10">
          Categorías populares
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <article
                key={category.id}
                className="relative w-full h-[220px] overflow-hidden"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/30"></div>

                <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                  <Icon size={28} className="mb-2" />
                  <h2 className="text-3xl font-bold">{category.name}</h2>
                </div>

                <div className="absolute inset-5 border border-white"></div>
              </article>
            );
          })}
        </div>
      </Container>
    </div>
  );
};
