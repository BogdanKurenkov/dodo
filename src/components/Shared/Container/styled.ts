import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
  background: transparent;

  @media (max-width: 1280px) {
    width: calc(100vw - 60px);
  }
`;
