import ArticleCard from "./ArticleCard";

export default {
  title: "Components/ArticleCard",
  component: ArticleCard,
  argTypes: {},
};

const Template = (args) => <ArticleCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Diese Methode hilft Ihnen, Entscheidungen zu treffen",
  tags: [{ label: "Article", leftIcon: "press" }],
  image: "article.png",
  readingTime: "4 min Lesezeit",
};
