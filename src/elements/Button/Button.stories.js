import Button from "./Button";

export default {
  title: "Elements/Button",
  component: Button,
  argTypes: {},
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Book",
  leftIcon: "press",
  handleClick: () => {
    alert("Handling onClick");
  },
};
