import styled from "styled-components";

export const StyledContainer = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    padding: 0 26px;
  }
`;
