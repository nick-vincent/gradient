export default {
  title: 'Components/GradientBanner',
};

const Template = args => `<gradient-banner>${args.text}</gradient-banner>`;

export const Example = Template.bind({});
Example.args = {
  text: "Hear ye, hear ye! At this time, a friend shall lose his friend's hammer and the young shall not know where lieth the things possessed by their fathers that their fathers put there only just the night before, about eight o'clock.",
};
