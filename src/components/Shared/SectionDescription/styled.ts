import styled from "styled-components";

export const Text = styled.p<{ $color: string }>`
  font-weight: 400;
  font-size: 32px;
  line-height: 120%;
  color: ${({ $color }) => $color};
`;
