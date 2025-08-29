import styles from './Marcar.module.css';
import backgroundImg from '../../img/Salon.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import API from '../../services/API';
import Rodape from '../../components/Rodape';

function Marcar(){

    const navigate = useNavigate();

    const [form, setForm] = useState({
    name: "",
    number: "",
    description: "",
    date: "",
    time: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

    async function handleRegister(e) {
    e.preventDefault();

    try {
      const response = await API.post("/marcar", form);
      alert(response.data.message);
      navigate("/");
    } catch (error) {
      alert("Hórario ocupado, por favor escolha outro!");
      console.error(error);
    }
  }

    return(
      <>
       <Rodape titulo="Marcar Horário"/>
          <div className={styles.background} style={{ backgroundImage: `url(${backgroundImg})` }}>
            <div className={styles.formContainer}>

            <form className={styles.registerForm} onSubmit={handleRegister}>
                
            <input type="text" 
            name="name" 
            placeholder="Nome" 
            onChange={handleChange}/>

            <input 
            type="text" 
            name="number" 
            placeholder="Número" 
            onChange={handleChange}/>

            <input 
            type="text" 
            name="description" 
            placeholder="Descrição"
            onChange={handleChange}/>

            <input 
            type="Date" 
            name="date" 
            placeholder="Data"
            onChange={handleChange}/>

            <input 
            type="time" 
            name="time"
            onChange={handleChange}/>

            <button type="submit" redirect='./'>Marcar</button>
            </form>
        </div>
    </div>
    </>
    )
}

export default Marcar;