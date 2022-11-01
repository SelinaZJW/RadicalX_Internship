import React from 'react';

import { Input } from './Input';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Input',
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export const Left = () => {
  return (
    <Input variant="left" type="email" placeholder="Email" icon="bi bi-key" />
  )
}

export const Right = () => {
  return (
    <Input variant="right" type="password" placeholder="Password" icon="bi bi-key" />
  )
}

export const NoIcon = () => {
  return (
    <Input type="text" placeholder="type here">
      Input
    </Input>
  )
}

export const Large = () => {
  return (
    <Input size="large">
      Input
    </Input>
  )
}

export const Small = () => {
  return (
    <Input size="small">
      Input
    </Input>
  )
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template = (args) => {<Input {...args}> </Input> };

// export const Primary = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
// Primary.args = {
//   variant: "primary",
//   // label: 'Input',
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   variant: "secondary",
//   // label: 'Input',
// };

// export const Disabled = Template.bind({});
// Secondary.args = {
//   variant: "disabled",
//   // label: 'Input',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   // label: 'Input',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   // label: 'Input',
// };
