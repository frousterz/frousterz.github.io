import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0px 15px;
  background: #782321;
  box-sizing: border-box;
  display: grid;

  @media only screen and (min-width: 768px) {
    padding: 0px 40px;
  }

  @media only screen and (min-width: 1200px) {
    padding: 0px 10%;
  }
`;
