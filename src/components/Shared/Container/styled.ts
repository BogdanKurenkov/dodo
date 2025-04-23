import styled from "styled-components";

export const StyledContainer = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  background: transparent;

  @media (max-width: 1280px) {
    width: calc(100vw - 60px);
  }
`;
