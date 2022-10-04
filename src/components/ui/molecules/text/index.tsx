import React from "react";
import { TextWrapper } from "./styles";
import Heading from "../../atoms/heading";
import Paragraph from "../../atoms/paragraph";
import { content } from "../../../../data/content";

const Text = () => {
  const { title, paragraph } = content.masthead;

  return (
    <TextWrapper>
      <Heading text={title.text} fontSize={title.fontSize} />
      <Paragraph text="This is a paragraph" />
    </TextWrapper>
  );
};

export default Text;
