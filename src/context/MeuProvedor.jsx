// MeuProvedor.js
import { useState } from 'react';
import MeuContexto from './MeuContexto';

const MeuProvedor = ({ children }) => {
  const [dados, setDados] = useState('light');

  const toggleTheme = () => {
    setDados(dados === 'light' ? 'dark': 'light');
  };

  return (
    <MeuContexto.Provider value={{ dados, toggleTheme }}>
      {children}
    </MeuContexto.Provider>
  );
};

export default MeuProvedor;
