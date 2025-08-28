import { AboutUs, Hero } from "./components";
import { Header } from "./layout";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutUs />
      </main>
    </>
  );
}

export default App;
