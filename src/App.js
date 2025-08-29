import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import Service from './pages/Service';
import Hairservices from './pages/Hairservices';
import MaquiagemPage from './pages/MaquiagemPage';
import CiliosPage from './pages/CiliosPage';
import BrowService from './pages/BrowService';
import Agenda from './pages/Agenda/agenda';
import Marcar from './pages/Marcar/Marcar';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/marcar" element={<Marcar />}/>
      <Route path="/servicos" element={<Service />}/>
      <Route path="/agenda" element={<Agenda />}/>
      <Route path="/servico/cabelos" element={<Hairservices />}/>
      <Route path="/servico/maquiagem" element={<MaquiagemPage />} />
      <Route path="/servico/cilios" element={<CiliosPage />} />
      <Route path="/servico/sobrancelhas" element={<BrowService />} />
    </Routes>
  );
}

export default App;
