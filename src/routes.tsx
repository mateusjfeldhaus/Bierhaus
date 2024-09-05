import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { AlokoholfreiPage } from "./pages/AlkoholfreiPage";
import { CachacaPage } from "./pages/CachacaPage";
import { EspumantePage } from "./pages/EspumantePage";
import { GinPage } from "./pages/GinPage";
import { LicorPage } from "./pages/LicorPage";
import { RumPage } from "./pages/RumPage";
import { SakePage } from "./pages/SakePage";
import { TequilaPage } from "./pages/TequilaPage";
import { VodkaPage } from "./pages/VodkaPage";
import { WhiskyPage } from "./pages/WhiskyPage";
import { NotFound } from "./pages/404NotFound";
import { UtilsPage } from "./pages/UtilsPage";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/alkoholfrei" element={<AlokoholfreiPage />} />
      <Route path="/cachaca" element={<CachacaPage />} />
      <Route path="/espumante" element={<EspumantePage />} />
      <Route path="/gin" element={<GinPage />} />
      <Route path="/licor" element={<LicorPage />} />
      <Route path="/rum" element={<RumPage />} />
      <Route path="/sake" element={<SakePage />} />
      <Route path="/tequila" element={<TequilaPage />} />
      <Route path="/vodka" element={<VodkaPage />} />
      <Route path="/whisky" element={<WhiskyPage />} />
      <Route path="/utils" element={<UtilsPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
