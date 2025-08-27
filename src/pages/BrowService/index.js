import Banner from '../../components/Banner';
import Rodape from '../../components/Rodape';
import style from './BrowService.module.css';
import { useEffect, useState } from 'react';
import Card from '../../components/Card';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

function BrowService(){

    const [brow, setBrow] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3003/servico/sobrancelhas')
      .then(res => res.json())
      .then(data => setBrow(data))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

    useEffect(() => {
    if (brow.length > 0) {
      AOS.refresh(); 
    }
  }, [brow]);

    return(
        <>
        <Banner/>
        <Rodape titulo="Sobrancelhas"/>
        <div className={style.loginContainer} >
         
        <div className={style.cardsWrapper}  data-aos="fade-down">
         {brow.map((brow, index) => (
            <div key={brow.id} data-aos="fade-up" data-aos-delay={index * 100}>
              <Card
                titulo={brow.name}
                image={brow.image}
              />
            </div>
          ))}
            </div>
            
          </div>
          <Link to="/servicos" className={style.linkRodape}>
              <Rodape titulo="Veja o catálogo de serviços e escolha aquilo que mais te interessa!"/>
          </Link>
      <Footer/>
      </>
    )
}

export default BrowService;