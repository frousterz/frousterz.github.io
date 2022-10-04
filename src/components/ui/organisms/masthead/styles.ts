import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 80vh;
  padding: 0px 15px;
  box-sizing: border-box;
  display: grid;
  border: 1px solid;

  @media only screen and (min-width: 768px) {
    padding: 0px 40px;
  }

  @media only screen and (min-width: 1200px) {
    padding: 0px 10%;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
