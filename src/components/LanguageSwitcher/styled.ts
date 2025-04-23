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
  transition: ${({ $isActive }) => ($isActive ? "1.5s ease" : "0s ease")};
  visibility: ${({ $isActive }) => ($isActive ? "visible" : "hidden")};
  opacity: ${({ $isActive }) => ($isActive ? "1" : "0")};
  height: ${({ $isActive }) => ($isActive ? "max-content" : "0")};
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  margin-left: 18px;

  @media (max-width: 1280px) {
    margin-left: 0;
  }

  @media (max-width: 500px) {
    transition: ${({ $isActive }) => ($isActive ? "1.2s ease" : "0s ease")};
  }
`;

export const Divider = styled.div``;
