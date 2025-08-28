import { AboutUs, Categories, Hero } from "./components";
import { Header } from "./layout";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Categories />
      </main>
    </>
  );
}

export default App;
