import React from "react";
import { Meta } from '@storybook/react/types-6-0';

import Tooltip from "../Tooltip";
import Button from "../../Button/Button"
export default {
  title: "UI/Tooltip",
  component: Tooltip,
  argTypes:{
    content: { control: 'object' },
    direction: { 
      control: {
        type: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      }
    },
    delay: { control: 'number' },
  }
} as Meta;

const Template = (args) => <Tooltip {...args} ><Button text='Hover me to see' width={100} /></Tooltip>;

export const Default = Template.bind({});

Default.args = {
  content: "Tooltip Content",
  direction: 'bottom',
  delay: 200,
}