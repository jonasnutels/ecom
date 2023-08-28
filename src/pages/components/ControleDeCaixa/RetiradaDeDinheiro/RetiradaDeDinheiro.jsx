import  { useState } from 'react';
import './style.css'; // Importar o arquivo CSS de estilização
import {Typography } from 'antd';

const RetiradaDeDinheiro = () => {
  const { Text } = Typography;
  const [depositorName, setDepositorName] = useState('');
  const [depositAmount, setDepositAmount] = useState('');
  const [depositDate, setDepositDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar lógica para enviar os dados do depósito para onde for necessário
    console.log('Dados do depósito:', {
      depositorName,
      depositAmount,
      depositDate,
    });
  };

  return (
    <div>
      <h2>Informações de Retirada</h2>
      <p>Saldo atual:  <Text type="success">R$ 150,00</Text></p>
      <div className="form-group">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome do Depositante:</label>
          <input
            type="text"
            value={depositorName}
            onChange={(e) => setDepositorName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Valor do Depósito:</label>
          <input
            type="number"
            value={depositAmount}
            onChange={(e) => setDepositAmount(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Data do Depósito:</label>
          <input
            type="date"
            value={depositDate}
            onChange={(e) => setDepositDate(e.target.value)}
            required
          />
        </div>
        <div className="button-container">
          <button type="submit">Registrar Retirada</button>
        </div>
      </form>
    </div>
    </div>
  );
};
  
export default RetiradaDeDinheiro;
