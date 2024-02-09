import { useState } from 'react';
import Modal from "./Modal";

const OpenModalButton = ({ buttonContent, modalContent }) => {
  const [modalOpenStatus, setModalOpenStatus] = useState(false);

  const handleClick = () => {
    setModalOpenStatus(true);
  };

  return (
    <>
      <button className="openModalButton" onClick={ handleClick }>{ buttonContent }</button>
      <Modal status={modalOpenStatus} setStatus={setModalOpenStatus}>
        { modalContent }
      </Modal>
    </>
  );
}

export default OpenModalButton;