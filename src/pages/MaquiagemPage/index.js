import style from './MaquiagemPage.module.css';
import Footer from  '../../components/Footer';
import Rodape from '../../components/Rodape';
import Card from '../../components/Card';
import Banner from '../../components/Banner';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AOS from 'aos';


function MakePage(){ 

  const [make, setMake] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3003/servico/maquiagem')
      .then(res => res.json())
      .then(data => setMake(data))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

    useEffect(() => {
    if (make.length > 0) {
      AOS.refresh(); 
    }
  }, [make]);

    return(
        <>
        <Banner/>
        <Rodape titulo="Maquiagens"/>
        <div className={style.loginContainer} >
         
        <div className={style.cardsWrapper}  data-aos="fade-down">
         {make.map((make, index) => (
            <div key={make.id} data-aos="fade-up" data-aos-delay={index * 100}>
              <Card
                titulo={make.name}
                image={make.image}
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

export default MakePage;