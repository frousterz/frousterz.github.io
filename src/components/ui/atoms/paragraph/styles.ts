import styled from "styled-components";
import { ContentWidth } from "../../../../typing/main";

export const StyledTextWrapper = styled.div`
  width: max-content;
  height: auto;
`;

interface TextProps {
  color?: string;
}

export const StyledText = styled.p<TextProps>`
  color: ${(props) => props.color};
  font-size: 16px;
  margin: 0;

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    font-size: 21px;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    font-size: 24px;
  }
`;
