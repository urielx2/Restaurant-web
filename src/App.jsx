import { Route, Routes } from "react-router-dom";
import { Home, Orders } from "./pages";
import { Layout } from "./layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/orders" element={<Orders />} />
      </Route>
    </Routes>
  );
}

export default App;
