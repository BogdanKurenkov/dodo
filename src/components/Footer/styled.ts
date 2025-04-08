import styled from "styled-components";

export const StyledFooter = styled.footer<{ $color?: string }>`
  ${({ theme }) => theme.mixins.flexCenter}
  gap: 8px;
  color: ${({ $color }) => $color};
`;

export const FooterText = styled.p``;
