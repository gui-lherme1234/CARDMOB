import React from 'react';

const Contato = ({ nome, telefone, email }) => {
  return (
    <div style={styles.container}>
      <p><strong>Nome:</strong> {nome}</p>
      <p><strong>Telefone:</strong> {telefone}</p>
      <p><strong>E-mail:</strong> {email}</p>
    </div>
  );
};

const styles = {
  container: {
    border: '1px solid #ccc',
    padding: '10px',
    borderRadius: '5px',
    width: '250px',
    backgroundColor: '#f9f9f9',
  }
};

export default Contato;
