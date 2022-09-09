export default {
  title: 'Components/StencilButton',
};

const Template = args => `<stencil-button>${args.text}</stencil-button>`;

export const Example = Template.bind({});
Example.args = {
  text: 'Click me!',
};
