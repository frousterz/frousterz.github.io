import React from "react";
import { ContentWidth, FontSize } from "../../../../typing/main";
import { StyledText, StyledTextWrapper } from "./styles";

interface ParagraphProps {
  readonly text: string;
  fontSize?: FontSize;
  contentWidth?: ContentWidth;
  color?: string;
  isBold?: boolean;
}

const Paragraph = (props: ParagraphProps) => {
  const { text, fontSize, contentWidth, color, isBold } = props;

  return text ? (
    <StyledTextWrapper width={contentWidth}>
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

export default Paragraph;
