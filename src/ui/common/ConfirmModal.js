// @flow

import React from 'react';

import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';

export type ConfirmModalProps = {
  show: boolean,
  text: string,
  title: string,
  onHide: Function,
  onClickYes: Function,
  onClickNo: Function,
};

const ConfirmModal = ({ show, text, title, onHide, onClickYes, onClickNo } : ConfirmModalProps) => {

  return (
    <Modal show={show} backdrop onHide={onHide}>
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>{text}</Modal.Body>

      <Modal.Footer>
        <Button className="ConfirmModal__no-btn" onClick={onClickNo}>No</Button>
        <Button className="ConfirmModal__yes-btn" bsStyle="primary" onClick={onClickYes}>Yes</Button>
      </Modal.Footer>
    </Modal>
  );
};

ConfirmModal.displayName = 'ConfirmModal';

export default ConfirmModal;
