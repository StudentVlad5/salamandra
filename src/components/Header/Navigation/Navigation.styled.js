import theme from "components/baseStyles/Variables.styled";
import styled from "styled-components";

export const NavBox = styled.div`
  margin-top: 200px;
  padding: 0 24px 0;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    padding: 0 64px 0;
  }
`;

export const Nav = styled.nav`
  width: 100%;
  overflow-x: scroll;
  white-space: nowrap;
  cursor: pointer;
  width: 100%;
  overflow-x: scroll;
  white-space: nowrap;
  position: ${(props) => (props.$isfixed === "fall" ? "fixed" : "static")};
  top: ${(props) => (props.$isfixed === "fall" ? "0" : "auto")};
  left: 0;
  background-color: ${(props) =>
    props.$isfixed === "fall" ? "#ffffff" : "transparent"};
  box-shadow: ${(props) =>
    props.$isfixed === "fall" ? "0px 2px 5px rgba(0, 0, 0, 0.1)" : "none"};
  z-index: ${(props) => (props.$isfixed === "fall" ? "1000" : "auto")};
  transition: top 0.3s ease;

  &::-webkit-scrollbar {
    height: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.yellow};
    border-radius: 5px;
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 10px;
  padding: 8px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding-bottom: 20px;
    padding-top: 10px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    gap: 20px;
    padding-bottom: 15px;
    padding-top: 25px;
  }

  @media screen and (min-width: 1637px) {
    justify-content: center;
    align-items: center;
  }
`;

export const NavListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 9px;
  border: 2px solid ${theme.colors.yellow};
  padding: 6px 13px;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    padding: 6px 22px;
  }

  &.active {
    background: ${theme.colors.yellow};
  }
`;

export const NavListItemLink = styled.a`
  color: ${(props) => props.theme.orange};

  &.active {
    color: ${theme.colors.white};
  }
  font-family: ${theme.fonts[1]};
  font-size: ${theme.fontSizes.small};
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSizes.medium};
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: ${theme.fontSizes.large};
  }

  /* &:hover {
    color: ${theme.colors.white};
  } */
`;
