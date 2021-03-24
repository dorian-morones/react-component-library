import React from "react";
import { Meta } from '@storybook/react/types-6-0';

import Dropdown from "../Dropdown";
import Button from "../../Button/Button"

export default {
  title: "UI/Dropdown",
  component: Dropdown,
  argTypes:{
    title: { control: 'object' },
    arrow: { control: 'boolean' },
  }
} as Meta;

const Template = (args) => <Dropdown {...args} ><Button text='Holy guacamole!' width={100} /></Dropdown>;

export const Default = Template.bind({});

Default.args = {
  title: "Dropdown trigger",
  arrow: false,
}