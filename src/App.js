import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import Hakkimizda from './pages/Hakkimizda';
import Iletisim from './pages/Iletisim';
import VidaliUrunler from './pages/Vidali_Urunler';
import Urunler from './pages/Urunler';
import PistonluUrunler from './pages/Pistonlu_Urunler';
import IkinciElUrunler from './pages/IkinciElUrunler';
import CerezPolitika from './pages/CerezPolitika';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hakkimizda" element={<Hakkimizda />} />
        <Route path="/iletisim" element={<Iletisim />} />
        <Route path="/vidali" element={<VidaliUrunler />} />
        <Route path="/urunler" element={<Urunler />} />
        <Route path="/pistonlu" element={<PistonluUrunler />} />
        <Route path="/ikinciel" element={<IkinciElUrunler />} />
        <Route path="/cerezpolitikasi" element={<CerezPolitika />} />
      </Routes>
    </Router>
  );
}

export default App;
