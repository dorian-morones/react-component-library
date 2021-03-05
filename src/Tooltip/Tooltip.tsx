import React, { FunctionComponent, useState } from 'react';

// Types
import { TooltipProps } from './Tooltip.types';

//Styled Components
import {
	TooltipContainer,
	TooltipContent
} from './styles/Tooltip_Styles';

const Tooltip: FunctionComponent<TooltipProps> = ({ content, direction = 'bottom', delay = 300,  children }) => {

	let timeout;
	const [show, setShow] = useState<boolean>(true);

	const showTip = () => {
    timeout = setTimeout(() => {
      setShow(true);
    }, delay);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setShow(true);
  };

	return (
		<TooltipContainer
			onMouseEnter={showTip}
			onMouseLeave={hideTip}
		>
			{children}
			{ show && (
				<TooltipContent direction={direction}>
					{content}
				</TooltipContent>
			)
			}
		</TooltipContainer>
	)
}

export default Tooltip;