import theme from 'components/baseStyles/Variables.styled';
import styled from 'styled-components';

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  padding: 25px 0;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
  padding: 0 0 50px 0 ;

  }
`;

export const BrandMaze = styled.a`
  color: ${props => props.theme.orange};
  font-family: ${theme.fonts[2]};
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 18px;
  }
`;
