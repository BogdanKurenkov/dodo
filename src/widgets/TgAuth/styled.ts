import styled from "styled-components";

export const AuthWrapper = styled.section`
  background-image: url("/images/auth_bg.webp");
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: 35%;
  background-position: 110% 0%;
  flex-grow: 1;
  margin-top: 100px;

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    background-size: 30%;
    background-position: 90% 0%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    background-image: none;
  }

  & h2 {
    margin-bottom: 58px;
  }

  & button {
    margin-top: 120px;
  }

  @media (max-width: 500px) {
    margin-top: 50px;
    background-image: none;

    & h2 {
      margin-bottom: 28px;
    }

    & button {
      margin-top: 88px;
      font-size: 32px;
    }
  }
`;
