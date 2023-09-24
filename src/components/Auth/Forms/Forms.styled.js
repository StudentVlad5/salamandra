import styled from 'styled-components';
import { Form, Field } from 'formik';
import { Link } from 'react-router-dom';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { Container } from 'components/baseStyles/CommonStyle.styled';
import theme from 'components/baseStyles/Variables.styled';

export const FormContainer = styled(Container)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  padding: 30px;

  @media (min-width: ${theme.breakpoints.tablet}) {
    padding: 50px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 40px;
  margin-top: 0;
  text-transform: uppercase;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    margin-bottom: 32px;

    font-family: ${theme.fonts[1]};
    font-size: ${theme.fontSizes.extraXL};
    font-weight: 500;

    color: ${theme.colors.black};
  }
`;

export const FormStyled = styled(Form)`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 280px;
  padding-top: 44px;
  margin: 0 auto;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 608px;
    height: 100%;
    margin: 0 auto;
    padding: 60px 0 40px 0;
    background-color: transparent;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 618px;
    padding: 60px 0 60px 0;
  }

  & > div {
    position: relative;
  }
`;
export const ShowPassword = styled.span`
  display: inline-block;
  position: absolute;
  width: 20px;
  height: 20px;
  right: 6%;
  top: 62%;
  transform: translateY(-80%);
  color: grey;
  cursor: pointer;
  svg {
    width: inherit;
    height: inherit;
  }
`;
export const IconValid = styled(FaCheck)`
  display: inline-block;
  position: absolute;
  width: 20px;
  height: 20px;
  right: 6%;
  top: 62%;
  transform: translateY(-80%);
  color: grey;
  cursor: pointer;
  svg {
    width: inherit;
    height: inherit;
  }
`;

export const IconInValid = styled(FaTimes)`
  display: inline-block;
  position: absolute;
  width: 20px;
  height: 20px;
  right: 6%;
  top: 30px;
  transform: translateY(-80%);
  color: grey;
  cursor: pointer;
  svg {
    width: inherit;
    height: inherit;
  }
`;

export const Input = styled(Field)`
  width: 280px;
  padding: 11px 0 12px 14px;
  margin-bottom: 0px;

  font-family: ${theme.fonts[1]};
  font-size: ${theme.fontSizes.small};
  line-height: 1.3;

  background: ${theme.colors.blue1};
  color: ${theme.colors.brown2};
  transition: all 0.25s ease-in;

  &:focus,
  &:hover {
    border-color: ${theme.colors.braun};
    color: ${theme.colors.black};
    outline: none;
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 448px;
    font-size: ${theme.fontSizes.medium};
    padding: 14px 0 13px 32px;
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 558px;
  }

  &::placeholder {
    text-transform: uppercase;
  }
  &:focus ~ .floating-label,
  &:not([value='']):not(:focus):invalid ~ .floating-label,
  &:not([value='']):not(:focus):valid ~ .floating-label {
    top: -15px;
    left: 20px;
    font-size: 11px;
    opacity: 1;
  }
`;

export const Span = styled.span`
  position: absolute;
  left: 20px;
  top: 18px;

  font-family: ${theme.fonts[2]};
  font-size: ${theme.fontSizes.small};

  text-transform: uppercase;
  pointer-events: none;
  transition: 0.2s ease all;
`;

export const Btn = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 125px;
  padding: 8px;

  border: none;
  border-radius: 4px;
  color: ${theme.colors.white};
  background: ${theme.colors.braun};
  transform: scale(1);
  cursor: pointer;

  overflow-x: hidden;
  overflow-y: hidden;
  transition: all 0.25s ease-in;

  &:hover,
  &:focus {
    transform: scale(1.05);
    transition: transform 0.5s;
    color: ${theme.colors.white};
    background: ${theme.colors.braun};
  }
  &:disabled {
    opacity: 0.5;
    cursor: auto;
    transform: none;
    transition: none;
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 180px;
  }
`;

export const BackButton = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 125px;
  padding: 8px;

  border-radius: 4px;
  color: ${theme.colors.black};
  background: ${theme.colors.white};
  transform: scale(1);
  cursor: pointer;
  overflow-x: hidden;
  overflow-y: hidden;
  transition: all 0.25s ease-in;

  &:hover,
  &:focus {
    transform: scale(1.05);
    transition: transform 0.5s;
    color: ${theme.colors.white};
    background: ${theme.colors.braun};
    border-color: ${theme.colors.braun};
  }
  &:disabled {
    opacity: 0.5;
    cursor: auto;
    transform: none;
    transition: none;
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 180px;
  }
`;

export const ErrorBox = styled.div`
  position: absolute;
  bottom: -5px;
  right: 5px;
  white-space: nowrap;

  margin-bottom: -12px;

  color: #e53e3e;
  font-family: ${theme.fonts[1]};
  font-size: ${theme.fontSizes.extraSmall};
  font-style: normal;
  line-height: 1.4;
  letter-spacing: 0.03em;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    /* left: 32px; */
  }
`;

export const Div = styled.div`
  margin-bottom: 32px;
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  width: 280px;
  margin-bottom: 32px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 448px;
    font-size: ${theme.fontSizes.medium};
    flex-direction: row;
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 558px;
  }
`;

export const StyledLink = styled(Link)`
  color: ${theme.colors.gray};
  transition: all 0.25s ease-in;

  &:hover,
  &:focus {
    color: ${theme.colors.braun};
  }
`;

export const BoxText = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  gap: 10px;

  font-family: ${theme.fonts[2]};
  font-style: normal;
  font-weight: 400;
  font-size: ${theme.fontSizes.small};
  letter-spacing: 0.04em;
  color: ${theme.braun};
`;
