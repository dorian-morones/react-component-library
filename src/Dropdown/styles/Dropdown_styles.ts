import styled, { css } from 'styled-components';

// Types
import { DropdownTriggerProps } from '../Dropdown.types';

export const DropdownContainer = styled.div.attrs({
  className: 'DropdownContainer',
})`

`

export const DropdownTrigger = styled.div.attrs({
  className: 'DropdownTrigger',
}) <DropdownTriggerProps>`
  display: flex;
  align-items: center;

${({ arrow }) => {
    if (arrow === true) {
      return css`
          &:after {
          display: inline-block;
          margin-left: .255em;
          vertical-align: .255em;
          content: "";
          border-top: .3em solid;
          border-right: .3em solid transparent;
          border-bottom: 0;
          border-left: .3em solid transparent;
      }
    `
    }
  }}
`

export const DropdownContent = styled.div.attrs({
  className: 'DropdownContent',
})`
  
`