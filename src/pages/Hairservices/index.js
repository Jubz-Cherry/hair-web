import Banner from '../../components/Banner';
import style from './Hairservices.module.css';
import { useEffect, useState } from 'react';
import Card from '../../components/Card';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function Hairservices(){

    const [hair, setHair] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3003/servico/cabelos')
      .then(res => res.json())
      .then(data => setHair(data))
      .catch(err => console.error(err));
      AOS.refresh();
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh();
  }, []);

    return(
        <>
        <Banner/>
        <div className={style.loginContainer} >
           <h1 data-aos="fade-down">Lista de serviços</h1>
        <div className={style.cardsWrapper}  data-aos="fade-down">
         {hair.map((hair, index) => (
            <div key={hair.id} data-aos="fade-up" data-aos-delay={index * 100}>
              <Card
                titulo={hair.name}
                image={hair.image}
              />
            </div>
          ))}
        </div>
        </div>

      </>
    )
}

export default Hairservices;