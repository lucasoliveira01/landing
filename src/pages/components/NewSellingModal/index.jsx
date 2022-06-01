import { useState } from "react";

import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";
import { Container } from "./styles";

export function NewSellingModal({ isOpen, onRequestClose }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");

  async function handleCreateNewSelling(event) {
    event.preventDefault();

    onRequestClose();
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <button
          type="button"
          onClick={onRequestClose}
          className="react-modal-close"
        >
          <AiOutlineClose />
        </button>
        <Container onSubmit={handleCreateNewSelling}>
          <h2>Cadastrar Transação</h2>
          <input
            placeholder="Título"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <input
            type="number"
            placeholder="Valor"
            value={amount}
            onChange={(event) => setAmount(Number(event.target.value))}
          />

          <input
            placeholder="Categoria"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          />
          <button type="submit">Cadastrar</button>
        </Container>
      </Modal>
    </>
  );
}
