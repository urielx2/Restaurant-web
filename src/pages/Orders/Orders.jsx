import { CategoriesOrder, Container } from "../../components";

export const Orders = () => {
  return (
    <Container>
      <div className="space-y-2 mb-16">
        <h2 className="text-3xl font-semibold">
          Haz elegido el mejor restaurante de Zaragoza Nuevo León
        </h2>
        <span className="text-gray-200 font-sm">
          Prueba ahora mismo nuestros deliciosos platillos
        </span>
      </div>

      <CategoriesOrder />
    </Container>
  );
};
