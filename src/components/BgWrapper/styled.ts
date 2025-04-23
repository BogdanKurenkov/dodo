import styled from "styled-components";

export const StyledBgWrapper = styled.div<{ $isQr: boolean }>`
  position: relative;
  background-color: ${({ theme }) => theme.colors.white};

  ${({ $isQr }) =>
    !$isQr &&
    `
    background-image: url("/images/faq_bg-desktop.png");
    background-repeat: no-repeat;
    background-size: 118%;
    background-position: 47px 232px;

    @media (max-width: 768px) {
      background-image: none;
    }
  `}
`;
