import React from "react";
import { Meta } from '@storybook/react/types-6-0';

import Modal from "../Modal";

export default {
  title: "UI/Modal",
  component: Modal,
  argTypes:{
    title: { control: 'text' },
    content: { control: 'object'},
    show: { control: 'boolean' }
  }
} as Meta;


const Template = (args) => <Modal {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: "UI Modal",
  show: false
}