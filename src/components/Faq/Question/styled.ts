import styled from "styled-components";

export const QuestionWrapper = styled.div`
  cursor: pointer;
  padding: 28px 0;

  &:not(:last-child) {
    border-bottom: 1px solid rgba(17, 17, 16, 0.4);
  }
`;

export const StyledQuestion = styled.div`
  ${({ theme }) => theme.mixins.flexBetween};
  align-items: center;
  font-weight: 500;
  font-size: 32px;
  line-height: 100%;
  gap: 28px;

  & span::first-letter {
    text-transform: uppercase;
  }

  @media (max-width: 1024px) {
    font-size: 20px;
    gap: 14px;
  }
`;

export const Answer = styled.p`
  opacity: 80%;
  font-size: 22px;
  font-weight: 400;
  line-height: 120%;
  color: ${({ theme }) => theme.colors.black};
  padding-top: 28px;
  margin: 0;
  text-transform: lowercase;
`;
