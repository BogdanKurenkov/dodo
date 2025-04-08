import styled from "styled-components";

interface IStyledLanguageSwitcher {
  $active: boolean;
}

export const StyledLanguageSwitcher = styled.button<IStyledLanguageSwitcher>`
  background: none;
  border: none;
  font-size: 30px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  opacity: ${({ $active }) => ($active ? "100%" : "40%")};
`;

export const SwitcherWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;
  font-size: 42px;
  font-weight: 500;
`;

export const Divider = styled.div``;
