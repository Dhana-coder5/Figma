import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";

import Home from "./pages/Home.jsx";
import Collections from "./pages/Collections.jsx";
import SlabDossier from "./pages/SlabDossier.jsx";
import BespokeFabrication from "./pages/BespokeFabrication.jsx";
import TradeSpecifier from "./pages/TradeSpecifier.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/surface-collections"
          element={<Collections />}
        />

        <Route
          path="/slab-dossier"
          element={<SlabDossier />}
        />

        <Route
          path="/bespoke-fabrication"
          element={<BespokeFabrication />}
        />

        <Route
          path="/trade-specifier"
          element={<TradeSpecifier />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;