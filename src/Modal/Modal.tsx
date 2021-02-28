import React, { FunctionComponent, useRef, useEffect } from "react";

// Types
import { ModalProps } from "././Modal.types";

// Styled components
import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  ModalContent
} from './styles/Modal_Style';

const Modal: FunctionComponent<ModalProps> = ({
  title = 'Modal Title',
  content = "Modal Content",
  overlayClick = true,
  show,
  close,
}) => {

  // Ref
  const modalRef = useRef(null);

  const handleOverlayClick = (e) => {
    if (modalRef !== null && !e.target.closest(`#${modalRef.current.id}`) && overlayClick) {
      close();
    }
  };

  //Click Listener
  useEffect(() => {
    document.addEventListener('click', handleOverlayClick);
    return () => {
      document.removeEventListener('click', handleOverlayClick);
    }
  }, [])

  return (
    <>
      { show && (
        <ModalOverlay>
          <ModalContainer id="ModalUI" ref={modalRef}>
            <ModalHeader>
              <p>{title}</p>
            </ModalHeader>
            <ModalContent>
              <p>{content}</p>
            </ModalContent>
          </ModalContainer>
        </ModalOverlay>
      )
      }
    </>
  )
}

export default Modal;