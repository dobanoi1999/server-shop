import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeShow } from "redux/action/modal";
import { ModalElement, ButtonCloseModal, WrapperForm } from "./Modal.element";
const Modal = ({ children }) => {
  const dispatch = useDispatch();

  return (
    <ModalElement>
      <ButtonCloseModal onClick={() => dispatch(changeShow(false))}>
        X
      </ButtonCloseModal>
      <WrapperForm>{children}</WrapperForm>
    </ModalElement>
  );
};

export default Modal;
