import Banner from '../../components/Banner';
import styles from './Service.module.css';
import Rodape from '../../components/Rodape';
import Card from '../../components/Card';
import API from '../../services/API';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { Link } from 'react-router-dom';



function Service(){


  const [ services, setServices ] = useState([]);


  useEffect(() => {
    API.get("http://localhost:3003/servicos")
      .then(res => setServices(res.data))
      .catch(err => console.error(err));
  }, []);

  
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh();
  }, []);

  const routesMap = {
  Cabelos: "/servico/cabelos",
  Maquiagem: "/maquiagem",
  Cílios: "/cilios",
  Sobrancelha: "/sobrancelha"
};


    return(
    <>
      <Banner/>
        <div className={styles.container}>
      <Rodape/>

     <div className={styles.cardsWrapper}  data-aos="fade-in">
      {services.map(services => (
          <Link 
              to={routesMap[services.name]}
              key={services.id}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <Card
                titulo={services.name}
                image={`http://localhost:3003/imgservices/${services.image}`}
              />
            </Link>
                
          ))}
        </div>
      </div>
    </>
       
    )
}

export default Service;