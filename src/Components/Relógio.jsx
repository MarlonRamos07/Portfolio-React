import '../Components/Relógio.css'
import { useState, useEffect } from 'react';

function Relogio() {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date());
    }, 1000);

    return () => clearInterval(intervalo); // limpa o intervalo
  }, []);

  return (
    <div style={{ color: 'white', fontFamily: 'Poppins', fontSize: '2rem' }}>
      Agora são: {hora.toLocaleTimeString()}
    </div>
  );
}

export default Relogio;
