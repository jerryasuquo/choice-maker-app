import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.clearOption}
    contentLabel="Selected Option"
    closeTimeoutMS={200}
    className="modal"
  >
    <h3 className="modal__title">Your Option is:</h3>
    <p className="modal__body">{props.selectedOption}</p>
    <button className="modal-button" onClick={props.clearOption}>
      Ok
    </button>
  </Modal>
);

export { OptionModal };
