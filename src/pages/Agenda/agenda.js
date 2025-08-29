import styles from './Agenda.module.css';
import Banner from '../../components/Banner';
import Rodape from '../../components/Rodape';
import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


function Agenda() {
  const [user, setUser] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [loading, setLoading] = useState(true);

  const fetchAppoint = async () => {
    setLoading(true);
    try {
      const res = await fetch('http://localhost:3003/userservice');
      if (!res.ok) {
        console.error('Erro ao carregar agendamentos');
        return;
      }
      const data = await res.json();
      setUser(data);
    } catch (error) {
      console.error('Erro na requisição:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchAppoint();
  }, []);

  const formatLocalDate = (dateStr) => {
  if (!dateStr) return 'Data inválida';

  const [year, month, day] = dateStr.split('T')[0].split('-');
  const localDate = new Date(year, month - 1, day);

  return localDate.toLocaleDateString('pt-BR');
};

  const appointFiltred = user.filter(appoint => {
    if (!appoint.date) return false; 
  const dateParts = appoint.date.split('T')[0].split('-'); // [yyyy, mm, dd]
  const appointDate = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);

  return (
    appointDate.getFullYear() === selectedDate.getFullYear() &&
    appointDate.getMonth() === selectedDate.getMonth() &&
    appointDate.getDate() === selectedDate.getDate()
  );
});
  const deletAppoint = async (id) => {
    try {
      await fetch(`http://localhost:3003/userservice/${id}`, {
        method: 'DELETE'
      });
      setUser(user.filter(u => u._id !== id));
    } catch (err) {
      console.error('Erro ao excluir agendamento:', err);
    }
  };

  return (
    <>
      <Banner />
      <Rodape titulo="Agenda" />

      <div className={styles.appointContainer}>
        <div className={styles.calendarArea}>
          <Calendar
            onChange={setSelectedDate}
            value={selectedDate}
          />
        </div>

        <div className={styles.listAppoint}>
          <h2>Agendamentos em {selectedDate.toLocaleDateString('pt-BR')}</h2>

          {loading ? (
            <p>Carregando agendamentos...</p>
          ) : appointFiltred.length === 0 ? (
            <p>Nenhum agendamento para esta data.</p>
          ) : (
            appointFiltred.map(appoint => (
              <div key={appoint._id} className={styles.appointCard}>
                <p><strong>Nome:</strong> {appoint.name}</p>
                <p><strong>Telefone:</strong> {appoint.number}</p>
                <p><strong>Serviço:</strong> {appoint.description}</p>
                <p>
                  <strong>Data:</strong>{formatLocalDate(appoint.date)}
                   {new Date(appoint.date.split('T')[0]).toLocaleDateString('pt-BR')}
                </p>
                <p><strong>Hora:</strong> {appoint.time}</p>

                <button
                  className={styles.deletBtn}
                  onClick={() => deletAppoint(appoint._id)}
                >
                  Excluir agendamento
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default Agenda;
