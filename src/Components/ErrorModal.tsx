import * as React from "react";
import { useState, useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import { ReducerTypes } from "@Contexts/Reducer";
import { GlobalContext } from "@Contexts/Context";

function ErrorModal() {
  const { dispatch, contextState } = useContext(GlobalContext);

  const onClose = () => {
    dispatch({
      type: ReducerTypes.ShowError,
      payload: false,
    })
  }

  return (
    <Modal show={contextState.showError} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Error!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Apologies but we could not load new cats for you at this time! Miau!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
  );
}

export default ErrorModal;
