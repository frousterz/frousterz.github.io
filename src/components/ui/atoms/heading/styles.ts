import styled, { css } from "styled-components";
import { content } from "../../../../data/content";

export const StyledTextWrapper = styled.div`
  width: 100%;
  height: auto;
  overflow-wrap: break-word;
`;

interface TextProps {
  color?: string;
}

export const StyledText = styled.h1<TextProps>`
  color: ${(props) => props.color};
  font-weight: bold;
  font-size: 48px;

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    font-size: 64px;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1440px) {
    font-size: 96px;
  }

  margin: 0;
`;
