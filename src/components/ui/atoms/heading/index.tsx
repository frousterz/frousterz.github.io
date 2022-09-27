import React from "react";
import { FontSize } from "../../../../typing/main";
import { StyledText, StyledTextWrapper } from "./styles";

interface HeadingProps {
  readonly text: string;
  fontSize?: FontSize;
  color?: string;
  isBold?: boolean;
}

const Heading = (props: HeadingProps) => {
  const { text, fontSize, color, isBold } = props;

  return text ? (
    <StyledTextWrapper>
      <StyledText
        mobileFontSize={fontSize?.mobile}
        fontSize={fontSize?.desktop}
        isBold={isBold}
        color={color}
      >
        {text}
      </StyledText>
    </StyledTextWrapper>
  ) : (
    <></>
  );
};

export default Heading;
