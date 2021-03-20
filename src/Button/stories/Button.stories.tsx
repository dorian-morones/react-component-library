import React from "react";
import { Meta } from '@storybook/react/types-6-0';

// Colors
import Colors from "../../ColorPalette/Colors";

import Button from "../Button";

export default {
  title: "UI/Button",
  component: Button,
  argTypes:{
    text: { control: 'text' },
    width: { control: 'number'},
    fill: { control: 'color' },
    color: { control: 'color' },
    border: { control: 'boolean' },
    borderSize: { control: 'number' },
    bordercolor: { control: 'color' },
    rounded: { control: 'boolean' },
  }
} as Meta;


const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  text: "UI Button",
  width: 200,
  fill: Colors.MainColors.geekblue,
  color: Colors.MainColors.white,
  border: true,
  borderSize: 1,
  borderColor: Colors.MainColors.white,
  rounded: true,
}