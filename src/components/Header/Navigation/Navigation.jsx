import React, { useEffect, useState } from 'react';
import { SwitchTheme } from 'components/ThemeStatus/SwitcherTheme/SwitchTheme';
import { onFetchError } from 'helpers/Messages/NotifyMessages';
import { onLoaded, onLoading } from 'helpers/Loader/Loader';
import {
  Nav,
  NavBox,
  NavList,
  NavListItem,
  NavListItemLink,
} from './Navigation.styled';

export const Navigation = ({ catalog, isLoading, error }) => {
  const [, setScrollX] = useState(0); //scrollX
  const [isFixed, setIsFixed] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const handleSliderScroll = e => {
    const container = e.target;
    const scrollLeft = container.scrollLeft;
    setScrollX(scrollLeft);
  };

  const currentUrl = window.location.href.split('#')[0];

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.getElementById('nav');
      if (!nav) return;

      const navPosition = nav.getBoundingClientRect().top;
      setIsFixed(navPosition <= 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleItemClick = item => {
    setActiveItem(item);
  };
  return (
    <NavBox id="nav">
      <SwitchTheme />
      <Nav onScroll={handleSliderScroll} isFixed={isFixed}>
        <NavList>
          {isLoading ? onLoading() : onLoaded()}
          {error && onFetchError('Whoops, something went wrong')}
          {catalog.map((item, i) => (
            <NavListItem
              key={i}
              className={activeItem === item ? 'active' : ''}
              onClick={() => handleItemClick(item)}
            >
              <NavListItemLink
                href={`${currentUrl}#${item}`}
                aria-label={item}
                className={activeItem === item ? 'active' : ''}
              >
                {item}
              </NavListItemLink>
            </NavListItem>
          ))}
        </NavList>
      </Nav>
    </NavBox>
  );
};
