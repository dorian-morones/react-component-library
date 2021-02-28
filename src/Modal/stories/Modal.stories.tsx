import React from "react";
import { Meta } from '@storybook/react/types-6-0';

import Modal from "../Modal";

export default {
  title: "Modal",
  component: Modal,
  
} as Meta;;


export const ModalStorie = () => <Modal title="Modal Test" content={<p>Modal Content</p>} show={true}
close={console.log('close')} />;