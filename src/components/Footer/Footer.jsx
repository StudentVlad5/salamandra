import React from 'react';
import { BrandMaze, Footer } from './Footer.styled';

export const FooterComp = () => {
  return (
    <Footer>
      <BrandMaze
        href="https://brand-maze.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Designed and Developed by Brand Maze
      </BrandMaze>
    </Footer>
  );
};
