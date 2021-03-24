import React, { FunctionComponent, useState } from 'react';

// Styled components
import {
  DropdownContainer,
  DropdownTrigger,
  DropdownContent
} from './styles/Dropdown_styles';

// Types 
import { DropdownProps } from './Dropdown.types';

const Dropdown: FunctionComponent<DropdownProps> = ({
  title,
  children,
  arrow,
}) => {

  const [show, setShow] = useState<boolean>(false);

  return (
    <DropdownContainer>
      <DropdownTrigger onClick={() => setShow(!show)} arrow={arrow}>
        {title}
        {arrow && <span></span>}
      </DropdownTrigger>
      { show &&
        <DropdownContent>
          {children}
        </DropdownContent>
      }
    </DropdownContainer>
  )
}

export default Dropdown;