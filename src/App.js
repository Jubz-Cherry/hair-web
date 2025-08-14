import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import Agendar from './pages/Agendar/Agendar'; 
import Service from './pages/Service';
import Hairservices from './pages/Hairservices';
import MaquiagemPage from './pages/MaquiagemPage';
import CiliosPage from './pages/CiliosPage';
import SobrancelhaPage from './pages/SobrancelhaPage';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/agendar" element={<Agendar />}/>
      <Route path="/servicos" element={<Service />}/>
      <Route path="/servico/cabelos" element={<Hairservices />}/>
      <Route path="/maquiagem" element={<MaquiagemPage />} />
      <Route path="/cilios" element={<CiliosPage />} />
      <Route path="/sobrancelha" element={<SobrancelhaPage />} />
    </Routes>
  );
}

export default App;
