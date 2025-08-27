import style from './CiliosPage.module.css';
import Footer from  '../../components/Footer';
import Rodape from '../../components/Rodape';
import Card from '../../components/Card';
import Banner from '../../components/Banner';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AOS from 'aos';



function CiliosPage(){ 

  const [cilios, setCilios] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3003/servico/cilios')
      .then(res => res.json())
      .then(data => setCilios(data))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

    useEffect(() => {
    if (cilios.length > 0) {
      AOS.refresh(); 
    }
  }, [cilios]);

    return(
        <>
        <Banner/>
        <Rodape titulo="Cílios"/>
        <div className={style.loginContainer} >
         
        <div className={style.cardsWrapper}  data-aos="fade-down">
         {cilios.map((cilios, index) => (
            <div key={cilios.id} data-aos="fade-up" data-aos-delay={index * 100}>
              <Card
                titulo={cilios.name}
                image={cilios.image}
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

export default CiliosPage;