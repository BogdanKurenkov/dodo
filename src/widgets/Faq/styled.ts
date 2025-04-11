import styled from "styled-components";

export const FaqWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  display: flex;
  gap: 38px;
  margin-top: 88px;
`;

export const QuestionsWrapper = styled.div`
  padding: 45px 42px 3cqmin 55px;
  background: linear-gradient(
    153.34deg,
    rgba(255, 255, 255, 0.7) 33.29%,
    rgba(255, 255, 255, 0.4) 83.71%
  );
  border-radius: 30px;
  height: max-content;
  box-shadow: 0px 5px 15px -1px #0000001a;
  backdrop-filter: blur(24px);
`;

export const QuestionsCol = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(50% - 19px);
  gap: 38px;
`;

export const Questions = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SectionWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 100px 0;
`;

