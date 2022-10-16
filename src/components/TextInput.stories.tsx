import { Meta, StoryObj } from "@storybook/react";

import { TextInput, TextInputProps } from "./TextInput";

export default {
  title: "Componets/TextInput",
  component: TextInput,
  args: {
    placeholder: "Type your e-email adress",
    type: "email",
  },
  argTypes: {},
} as Meta<TextInputProps>;

export const Default: StoryObj<TextInputProps> = {};
