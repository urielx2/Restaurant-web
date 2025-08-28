import { Header } from "./layout";
import { AboutUs, Categories, Customize, Hero } from "./components";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Categories />
        <Customize />
      </main>
    </>
  );
}

export default App;
