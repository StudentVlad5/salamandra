import 'modern-normalize';
import { createGlobalStyle } from 'styled-components';
import theme from './Variables.styled';

export const GlobalStyle = createGlobalStyle`
html{
  scroll-behavior: smooth;
}

body {
  font-family: 'Inria Sans', sans-serif;
  font-family: 'Kumar One', cursive;
  font-family: 'Montserrat', sans-serif;

  background-color: ${props => props.theme.white};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  transition: .3s ease;
  
  &.scroll {
      max-height: 100vh;
      overflow: hidden;
    }
 }

#root {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

main{
  display: flex;
  justify-content: center;
  align-items: center;
}

 //-----reset-----
h1, h2, h3, h4, h5, h6, p {
  padding: 0;
  margin: 0;
}

ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

a{
  padding: 0;
  margin: 0;
  text-decoration: none;
}

img {
  display:block;
  max-width: 100%;
  height: auto;
}

//-----modal windows-----//
#popup-root {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 45;

    width: 100vw;
    height: 100vh;

    opacity: 1;
    visibility: visible;

    background-color: #0000006b;
    transition: opacity .3s linear 50ms, visibility .3s linear 50ms; 
}

#popup-root.is-hide {
  pointer-events: none;
  opacity: 0;
  visibility: hidden;

  width: 0;
  height: 0;
}

//-----pagination-----//
    .pagination-data {
        padding: 0;
        margin: 0;
    }

    .pagination-data li {
        list-style: none;
    }

    .rc-pagination {
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    .rc-pagination-item,
    .rc-pagination-prev,
    .rc-pagination-jump-prev,
    .rc-pagination-jump-next {
        margin-right: 8px;
    }

    .rc-pagination-total-text {
        margin-right: 12px;
        cursor: initial;
    }

    .rc-pagination-jump-next,
    .rc-pagination-jump-prev,
    .rc-pagination-next,
    .rc-pagination-prev {
        display: inline-block;
        min-width: 28px;
        height: 28px;
        color: rgba(0, 0, 0, .85);
        font-family: Arial;
        line-height: 28px;
        text-align: center;
        vertical-align: middle;
        list-style: none;
        border-radius: 2px;
        cursor: pointer;
        transition: all .3s;
    }

    .rc-pagination-jump-next button,
    .rc-pagination-jump-prev button {
        background: transparent;
        border: none;
        cursor: pointer;
        color: ${theme.colors.gray};
    }

    .rc-pagination-jump-next button:after,
    .rc-pagination-jump-prev button:after {
        display: block;
        content: "•••";
    }

    .rc-pagination-item,
    .rc-pagination-prev,
    .rc-pagination-next,
    .rc-pagination-total-text {
        min-width: initial;
        height: auto;  
        font-size: 10px;
        line-height: initial;
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    .rc-pagination-item a,
    .rc-pagination-item button,
    .rc-pagination-prev a,
    .rc-pagination-prev button,
    .rc-pagination-next a,
    .rc-pagination-next button,
    .rc-pagination-total-text a,
    .rc-pagination-total-text button {
        padding: 6px 8px;
        height: auto;
        min-width: 24px;
        min-height: 24px;
        border-radius: 8px;
        border: 1px solid transparent;
        background-color: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 10px;
        font-weight: 500;
        color: #656f84 !important;
        transition: 0.3s;
        -webkit-transition: 0.3s;
        -moz-transition: 0.3s;
        -o-transition: 0.3s;
    }

    .rc-pagination-item.rc-pagination-item-active a,
    .rc-pagination-item.rc-pagination-item-active a:hover,
    .rc-pagination-prev.rc-pagination-item-active a,
    .rc-pagination-prev.rc-pagination-item-active a:hover,
    .rc-pagination-next.rc-pagination-item-active a,
    .rc-pagination-next.rc-pagination-item-active a:hover,
    .rc-pagination-total-text.rc-pagination-item-active a,
    .rc-pagination-total-text.rc-pagination-item-active a:hover {
        background-color: ${theme.colors.white};
        border-color: ${theme.colors.braun};
        color: ${theme.colors.gray} !important;
    }

    .rc-pagination-item a:hover,
    .rc-pagination-item button:hover,
    .rc-pagination-prev a:hover,
    .rc-pagination-prev button:hover,
    .rc-pagination-next a:hover,
    .rc-pagination-next button:hover,
    .rc-pagination-total-text a:hover,
    .rc-pagination-total-text button:hover {
        background-color: ${theme.colors.braun};
        border-color: ${theme.colors.braun};
        color: ${theme.colors.white} !important;
    }

    //-----react-select-----//

.react-select-container {
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px 15px 10px 15px;

  font-family:  ${theme.fonts[2]};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.375;
  letter-spacing: 0.04em;
  text-align: left;
  color: ${theme.colors.gray};

  &::placeholder {
    color: rgba(27, 27, 27, 0.6);
  }
  height: 40px;
  width: 100%;

  margin-bottom: 16px;

  background: ${theme.colors.black};
  border: 1px solid ${theme.colors.braun};
  border-radius: 40px;
  outline: none;
  transition: all 0.25s ease-in;
  &:hover {
    outline: 2px solid ${theme.colors.braun};
  }

  &:focus {
    outline: 3px solid ${theme.colors.braun};
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    display: none;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    height: 48px;
    margin-bottom: 20px;
  }
}

.react-select__control, .react-select__control--is-focused, .react-select__control--menu-is-open {
width: 100%;
padding: 0!important;
margin: 0!important;
border: none!important;
box-shadow: none!important;

background-color: transparent!important;
}

.react-select__input-container {
padding: 0!important;
margin: 0!important;
}

.react-select__placeholder {
padding: 0!important;
margin: 0!important;

color:  ${theme.colors.black}!important;
}

.react-select__indicators {
padding: 0!important;
margin: 0!important;
}

.react-select__menu {
}

.react-select__menu-list {
}

.react-select__option--is-focused {
background-color: ${theme.colors.black}!important;
}

.react-select__option--is-selected {
background-color: ${theme.colors.braun}!important;
}


.react-select__input-container {
padding: 0!important;
margin: 0!important;
}

.react-select__value-container {
padding: 0!important;
margin: 0!important;
}
`;
