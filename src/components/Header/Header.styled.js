import theme from 'components/baseStyles/Variables.styled';
import styled from 'styled-components';

export const Hero = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const TitleBox = styled.div`
  position: relative;
  z-index: 1;
  top: 90px;
`;

export const Title = styled.h1`
  color: ${theme.colors.yellow};
  font-family: ${theme.fonts[0]};
  font-size: ${theme.fontSizes.extraXL};
  font-style: normal;
  font-weight: 400;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 15px;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: ${theme.fontSizes.extraXXL};
  }
`;

export const TitleDiscr = styled.p`
  color: ${theme.colors.yellow};
  font-family: ${theme.fonts[1]};
  font-size: ${theme.fontSizes.extraXL};
  font-style: normal;
  font-weight: 400;
  text-align: center;
`;

export const HeroImg = styled.img`
  display: block;
  position: absolute;
  width: 100%;
  height: 291px;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    display: none;
  }
`;

export const HeroImgDesk = styled(HeroImg)`
  display: none;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    display: block;
    width: 100%;
    height: 347px;
  }
`;

export const HeroImgSalamandra = styled.img`
  display: block;
  position: absolute;
  top: 23px;
  left: -42px;
  width: 226px;
  height: 177px;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    display: none;
  }
`;

export const HeroImgSalamandraDesk = styled(HeroImgSalamandra)`
  display: none;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    display: block;
    width: 508px;
    height: 321px;
    top: -67px;
    left: -229px;
  }
`;

export const HeroImgSalamandra1 = styled(HeroImgSalamandra)`
  display: block;
  transform: scaleX(-1);
  left: 125px;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    display: none;
  }
`;

export const HeroImgSalamandraDesk1 = styled(HeroImgSalamandraDesk)`
  transform: scaleX(-1);
  left: 271px;
`;
