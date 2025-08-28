import { Header } from "./layout";
import {
  AboutUs,
  Categories,
  Customize,
  Hero,
  Menu,
  Ubication,
} from "./components";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Categories />
        <Customize />
        <Menu />
        <Ubication />
      </main>
      <footer className="p-5 text-center">
        <span>&copy; Restaurante hamburguesas Erick 2025</span>
      </footer>
    </>
  );
}

export default App;
