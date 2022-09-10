export default {
  title: 'Components/GradientButton',

  parameters: {
    actions: {
      handles: ['gradientButtonClick'],
    },
  },
};

const Template = args => `<gradient-button>${args.text}</gradient-button>`;

export const Example = Template.bind({});
Example.args = {
  text: 'Click me!',
};
