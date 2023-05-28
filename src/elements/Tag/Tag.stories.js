import Tag from "./Tag";

export default {
  title: "Elements/Tag",
  component: Tag,
  argTypes: {},
};

const Template = (args) => <Tag {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Article",
  leftIcon: "press",
};

export const RightIcon = Template.bind({});
RightIcon.args = {
  label: "Visit",
  rightIcon: "arrow",
};
