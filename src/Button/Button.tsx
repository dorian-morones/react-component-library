import React, { FunctionComponent, useRef, useEffect } from "react";

// Types
import { ButtonProps } from "./Button.types";

// Styled components
// import {
// } from './styles/Button_Style';

const Modal: FunctionComponent<ButtonProps> = ({
  text = 'click me'
}) => {


  return (
    <button type='button'>{text}</button>
  )
}

export default Modal;