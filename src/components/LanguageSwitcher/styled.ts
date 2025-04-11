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

export const SwitcherWrapper = styled.div<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  gap: 22px;
  font-size: 42px;
  font-weight: 500;
  transition: 1 ease;
  visibility: ${({ $isActive }) => ($isActive ? "visible" : "hidden")};
  opacity: ${({ $isActive }) => ($isActive ? "1" : "0")};
  height: ${({ $isActive }) => ($isActive ? "max-content" : "0")};
  margin: auto auto 0;
  margin-bottom: ${({ $isActive }) => ($isActive ? "50px" : "0")};
`;

export const Divider = styled.div``;
