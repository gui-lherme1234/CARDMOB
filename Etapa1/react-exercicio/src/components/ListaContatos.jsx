import React, { useState } from 'react';
import Contato from './Contato';

const ListaContatos = () => {
  // Estado para armazenar a lista de contatos
  const [contatos, setContatos] = useState([
    { id: 1, nome: 'João Silva', telefone: '(11) 98765-4321', email: 'joao.silva@email.com' },
    { id: 2, nome: 'Maria Oliveira', telefone: '(21) 99876-5432', email: 'maria.oliveira@email.com' },
  ]);

  // Estado para gerenciar os campos de formulário (criação e edição)
  const [novoContato, setNovoContato] = useState({ nome: '', telefone: '', email: '' });
  const [editando, setEditando] = useState(false);
  const [idEditando, setIdEditando] = useState(null);

  // Função para adicionar um novo contato
  const adicionarContato = () => {
    if (novoContato.nome && novoContato.telefone && novoContato.email) {
      setContatos([...contatos, { ...novoContato, id: Date.now() }]);
      setNovoContato({ nome: '', telefone: '', email: '' });
    }
  };

  // Função para editar um contato
  const editarContato = (id) => {
    const contato = contatos.find(c => c.id === id);
    setNovoContato({ nome: contato.nome, telefone: contato.telefone, email: contato.email });
    setEditando(true);
    setIdEditando(id);
  };

  // Função para atualizar o contato editado
  const atualizarContato = () => {
    setContatos(contatos.map(c =>
      c.id === idEditando
        ? { ...c, nome: novoContato.nome, telefone: novoContato.telefone, email: novoContato.email }
        : c
    ));
    setEditando(false);
    setNovoContato({ nome: '', telefone: '', email: '' });
    setIdEditando(null);
  };

  // Função para remover um contato
  const removerContato = (id) => {
    setContatos(contatos.filter(c => c.id !== id));
  };

  return (
    <div>
      <h1>Lista de Contatos</h1>

      {/* Formulário para adicionar ou editar contatos */}
      <div>
        <input
          type="text"
          placeholder="Nome"
          value={novoContato.nome}
          onChange={(e) => setNovoContato({ ...novoContato, nome: e.target.value })}
        />
        <input
          type="text"
          placeholder="Telefone"
          value={novoContato.telefone}
          onChange={(e) => setNovoContato({ ...novoContato, telefone: e.target.value })}
        />
        <input
          type="email"
          placeholder="E-mail"
          value={novoContato.email}
          onChange={(e) => setNovoContato({ ...novoContato, email: e.target.value })}
        />
        <button onClick={editando ? atualizarContato : adicionarContato}>
          {editando ? 'Atualizar' : 'Adicionar'}
        </button>
      </div>

      {/* Lista de contatos */}
      <div>
        {contatos.map(contato => (
          <div key={contato.id} style={styles.contatoItem}>
            <Contato nome={contato.nome} telefone={contato.telefone} email={contato.email} />
            <button onClick={() => editarContato(contato.id)}>Editar</button>
            <button onClick={() => removerContato(contato.id)}>Remover</button>
          </div>
        ))}
      </div>
    </div>
  );
};

// Estilos para os itens de contato
const styles = {
  contatoItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
  }
};

export default ListaContatos;
