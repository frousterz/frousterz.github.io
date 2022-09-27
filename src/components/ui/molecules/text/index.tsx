import React from "react";
import { TextWrapper } from "./styles";
import Heading from "../../atoms/heading";
import Paragraph from "../../atoms/paragraph";

const Text = () => {
  return (
    <TextWrapper>
      <Heading text="Test" />
      <Paragraph text="This is a paragraph" />
    </TextWrapper>
  );
};

export default Text;
