import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Banners from "./components/Banners";
import PizzaMenu from "./pages/PizzaMenu";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Banners />

      <main className="pt-40">
        <Routes>
          <Route path="/" element={<PizzaMenu />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
