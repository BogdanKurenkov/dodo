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
  & h2 {
    margin-bottom: 48px;
  }

  width: 40%;

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    & h2 {
      margin-bottom: 36px;
    }
  }
`;

export const ResultsRight = styled.div`
  width: 60%;
  margin-top: 300px;

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 500px) {
    margin-top: 230px;
  }
`;
