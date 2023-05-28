import React from "react";
import Tag from "../../../elements/Tag/Tag";

const ArticleCard = ({ title, tags, image, readingTime }) => {
  return (
    <div className="ArticleCard">
      <img src={image} alt="asd" className="w-72 rounded-3xl" />
      <p className="max-w-md text-2xl">{title}</p>
      <div>
        {tags.map((tag) => (
          <Tag key={tag.label} {...tag} />
        ))}
        <span>{readingTime}</span>
      </div>
    </div>
  );
};

export default ArticleCard;
