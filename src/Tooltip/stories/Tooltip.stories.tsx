import React from "react";
import { Meta } from '@storybook/react/types-6-0';

import Tooltip from "../Tooltip";

export default {
  title: "Tooltip",
  component: Tooltip,
  
} as Meta;


export const TooltipStorie = () => <Tooltip content="Tooltip Content Text"><p>Tooltip Triger</p></Tooltip>;