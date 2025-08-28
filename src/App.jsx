import { Header } from "./layout";
import { AboutUs, Categories, Customize, Hero, Menu } from "./components";

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
      </main>
    </>
  );
}

export default App;
