import React, { FunctionComponent, useRef, useEffect } from "react";

// Types
import { ButtonProps } from "./Button.types";

// Styled components
import {
  Button
} from './styles/Button_Styles';

const Modal: FunctionComponent<ButtonProps> = ({
  text = 'click me',
  fill,
  color,
  width,
  border = true,
  borderSize,
  bordercolor,
  rounded = true,
  handleClick,
}) => {

  return (
    <Button
      type='button'
      data-testid='button_test'
      fill={fill}
      color={color} 
      width={width}
      rounded={rounded}
      border={border}
      borderSize={borderSize}
      bordercolor={bordercolor}
      onClick={() => handleClick()}>
        {text}
    </Button>
  )
}

export default Modal;