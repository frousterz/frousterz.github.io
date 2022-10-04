import React from "react";
import { FontSize } from "../../../../typing/main";
import { StyledText, StyledTextWrapper } from "./styles";

interface HeadingProps {
  readonly text: string;
  color?: string;
}

const Heading = (props: HeadingProps) => {
  const { text, color } = props;

  return text ? (
    <StyledTextWrapper>
      <StyledText color={color}>{text}</StyledText>
    </StyledTextWrapper>
  ) : (
    <></>
  );
};

export default Heading;
