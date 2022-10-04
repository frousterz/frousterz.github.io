import React from "react";
import { ContentWidth, FontSize } from "../../../../typing/main";
import { StyledText, StyledTextWrapper } from "./styles";

interface ParagraphProps {
  readonly text: string;
  color?: string;
}

const Paragraph = (props: ParagraphProps) => {
  const { text, color } = props;

  return text ? (
    <StyledTextWrapper>
      <StyledText color={color}>{text}</StyledText>
    </StyledTextWrapper>
  ) : (
    <></>
  );
};

export default Paragraph;
