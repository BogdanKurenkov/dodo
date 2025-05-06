import styled from "styled-components";

export const ResultsWrapper = styled.section`
  padding: 100px 0;
  display: flex;
  margin-top: 100px;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
  }

  @media (max-width: 500px) {
    padding: 45px 0;
    margin-top: 82px;
  }
`;

export const ResultsLeft = styled.div`
  width: 40%;

  & h2 {
    margin-bottom: 48px;
  }

  & button {
    margin-top: 88px;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    & h2 {
      margin-bottom: 36px;
    }
  }

  @media (max-width: 768px) {
    & p:last-of-type {
      margin-bottom: 0;
    }

    & button {
      display: none;
    }
  }
`;

export const ResultsRight = styled.div`
  width: 60%;
  margin-top: 310px;

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 500px) {
    margin-top: 230px;
  }
`;
