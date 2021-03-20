import styled, { css } from 'styled-components';

// Types
import { ButtonProps } from "../Button.types";

// Colors
import Colors from "../../ColorPalette/Colors";

export const Button = styled.button.attrs(() => ({
  className: 'ui_button'
})) <ButtonProps>`
  
  width: ${({ width }) => width || 400}px;
  color: ${({ color }) => color || Colors.MainColors.white};
  background-color: ${({ fill }) => fill || Colors.MainColors.geekblue};
  padding: 10px 5px;
  border-radius: ${({ rounded }) => rounded ? 8 : 0}px;

  ${({ border }) => {
    if (border === true) {
      return css`
      border: solid ${({ borderSize }) => borderSize || 1}px ${({ bordercolor }) => bordercolor || Colors.MainColors.white};
    `
    } else{
      return css`
        border: 0px;
      `
    }
  }}
`