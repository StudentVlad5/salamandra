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
  const [isfixed, setIsFixed] = useState('');
  const [activeItem, setActiveItem] = useState(null);

  const handleSliderScroll = e => {
    const container = e.target;
    const scrollLeft = container.scrollLeft;
    setScrollX(scrollLeft);
  };

  const currentUrl = window.location.href.split('#')[0];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.menu-section');
      let currentActiveSection = null;

      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom >= 0) {
          currentActiveSection = section.id;
        }
      });

      setActiveItem(currentActiveSection);

      const nav = document.getElementById('nav');
      if (!nav) return;

      const navPosition = nav.getBoundingClientRect().top;
      navPosition <= 0 ? setIsFixed('fall') : setIsFixed('');
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
      <Nav onScroll={handleSliderScroll} $isfixed={isfixed}>
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
