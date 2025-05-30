import styled from "styled-components";

export const StyledSubtitle = styled.h3`
  font-size: 42px;
  font-weight: 600;
  line-height: 100%;

  &::first-letter {
    text-transform: uppercase;
  }

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;
