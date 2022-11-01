import React from 'react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export const Primary = () => {
  return (
    <Button variant="primary" >
      Button
    </Button>
  )
}

export const Secondary = () => {
  return (
    <Button variant="secondary">
      Button
    </Button>
  )
}

export const Disabled = () => {
  return (
    <Button variant="disabled">
      Button
    </Button>
  )
}

export const Large = () => {
  return (
    <Button size="large">
      Button
    </Button>
  )
}

export const Small = () => {
  return (
    <Button size="small">
      Button
    </Button>
  )
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template = (args) => {<Button {...args}> </Button> };

// export const Primary = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
// Primary.args = {
//   variant: "primary",
//   // label: 'Button',
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   variant: "secondary",
//   // label: 'Button',
// };

// export const Disabled = Template.bind({});
// Secondary.args = {
//   variant: "disabled",
//   // label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   // label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   // label: 'Button',
// };
