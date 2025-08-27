import Rodape from '../../components/Rodape';
import Cabecalho from '../../components/Cabecalho';
import styles from './Home.module.css';
import promoImg from './promo.png';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import haircare from './haircare.png';
import AOS from 'aos';
import { useEffect } from 'react';



function Home(){

    useEffect(() => {
      AOS.init({ duration: 1000, once: true });
    }, []);

    return(
      <>
      <Cabecalho/>
        <Rodape titulo="Bem-vinda ao W-hair"/>
        <div className={styles.container}>

          <div className={styles.promoSection}>
          <div className={styles.textwidget}>
            <h2>Mais que um salão, um espaço para realçar sua beleza natural!</h2>
            <p>Vá ao catálogo de serviços, escolha e agende seu horário!</p>
          </div>

          <div className={styles.imgSection} data-aos="fade-in">
            <img src={promoImg} alt="Promoções especiais" />
          </div>
          </div>

          <div className={styles.leftSection}>
          <div className={styles.careSection} data-aos="fade-in">
          <img src={haircare} alt="Cuidados com o cabelo" />
          </div>

            <div className={styles.textCare}>
            <h2>Dicas de tratamentos para fazer no cabelo</h2>
            <ul>
              <li>✔️ Nutrição semanal</li>
              <li>✔️ Hidratação regular</li>
              <li>✔️ Botox</li>
              <li>✔️ Umectação</li>
            </ul>
             <h3>Deseja fazer algum desses tratamentos? Marque horário!</h3>
          </div>

          <div className={styles.widgettitle}>
            <h2>Horário de funcionamento</h2>
            <p>Das terças aos sabádos, apartir das 8h da manhã até as 18h da tarde</p>
          </div>
        </div>

        </div>
        <Link to="/servicos" className={styles.linkRodape}>
            <Rodape titulo="Veja o catálogo de serviços e escolha aquilo que mais te interessa!"/>
        </Link>
        <Footer/>
      </>
    )
}

export default Home;