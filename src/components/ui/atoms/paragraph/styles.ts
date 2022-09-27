import styled from "styled-components";
import { ContentWidth } from "../../../../typing/main";

interface WrapperProps {
  readonly width?: ContentWidth;
}

export const StyledTextWrapper = styled.div<WrapperProps>`
  width: max-content;
  height: auto;
`;

interface TextProps {
  fontSize?: number;
  mobileFontSize?: number;
  color?: string;
  isBold?: boolean;
}

export const StyledText = styled.h1<TextProps>`
  color: ${(props) => props.mobileFontSize};
  font-weight: ${(props) => (props.isBold ? "bold" : "normal")};
  font-size: ${(props) =>
    props.mobileFontSize ? `${props.mobileFontSize}px` : "12px"};

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : "16px")};
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
  }
`;
