import  { useState } from 'react';
import './style.css'; // Importar o arquivo CSS de estilização

const CadastroPessoaJuridica = () => {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [idade, setIdade] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Lógica para enviar os dados
    console.log('Dados do formulário:', { nome, cpf, idade });

    // Resetar os campos após o envio
    setNome('');
    setCpf('');
    setIdade('');
  };

  return (
    <>
      <h2>Cadastro Pessoa Juridica</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cpf">CNPJ:</label>
          <input
            type="text"
            id="cpf"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="idade">Idade:</label>
          <input
            type="number"
            id="idade"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
            required
          />
        </div>
        <div className="button-container">
          <button type="submit">Cadastrar</button>
        </div>
      </form>
    </>

  );
};

export default CadastroPessoaJuridica;
