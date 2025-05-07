import styled from "styled-components";

export const AuthWrapper = styled.section`
  background-image: url("/images/auth_bg2.png");
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: contain;
  flex-grow: 1;
  margin-top: 100px;

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
