import React from 'react';
import {
  Hero,
  HeroImg,
  HeroImgDesk,
  HeroImgSalamandra,
  HeroImgSalamandra1,
  HeroImgSalamandraDesk,
  HeroImgSalamandraDesk1,
  Title,
  TitleBox,
  TitleDiscr,
} from './Header.styled';

import fon from 'images/hero/fon.webp';
import fon2x from 'images/hero/fon@2x.webp';
import fonPng2x from 'images/hero/fonPng@2x.png';
import fonPng from 'images/hero/fonPng.png';

import fonMobPng from 'images/hero/fonMob.png';
import fonMobPng2x from 'images/hero/fonMob@2x.png';
import fonMobWeb from 'images/hero/fonMob.webp';
import fonMobWeb2x from 'images/hero/fonMob@2x.webp';

import salamandra from 'images/hero/salamandra.png';
import salamandra2x from 'images/hero/salamandra@2x.png';
import salamandraWeb from 'images/hero/salamandra.webp';
import salamandraWeb2x from 'images/hero/salamandra@2x.webp';

import salamandraDesk from 'images/hero/salamandraDesk.png';
import salamandraDesk2x from 'images/hero/salamandraDesk@2x.png';
import salamandraDeskWeb from 'images/hero/salamandraDesk.webp';
import salamandraDeskWeb2x from 'images/hero/salamandraDesk@2x.webp';

import { Navigation } from './Navigation/Navigation';

export const Header = ({catalog, group, menu, isLoading, setIsLoading, error}) => {
  return (
    <>
      <Hero>
        <picture style={{ display: 'contents' }}>
          <source srcSet={`${fon} 1x, ${fon2x} 2x`} type="image/webp" />
          <HeroImgDesk
            src={fonPng}
            srcSet={`${fonPng} 285w, ${fonPng2x} 570w`}
            width={285}
            height={400}
            alt="Plants"
            loading="lazy"
          />
        </picture>

        <picture style={{ display: 'contents' }}>
          <source
            srcSet={`${fonMobWeb} 1x, ${fonMobWeb2x} 2x`}
            type="image/webp"
          />
          <HeroImg
            src={fonMobPng}
            srcSet={`${fonMobPng} 285w, ${fonMobPng2x} 570w`}
            width={285}
            height={400}
            alt="Plants"
            loading="lazy"
          />
        </picture>

        <TitleBox>
          <picture style={{ display: 'contents' }}>
            <source
              srcSet={`${salamandraWeb} 1x, ${salamandraWeb2x} 2x`}
              type="image/webp"
            />
            <HeroImgSalamandra
              src={salamandra}
              srcSet={`${salamandra} 285w, ${salamandra2x} 570w`}
              width={285}
              height={400}
              alt="Plants"
              loading="lazy"
            />
          </picture>

          <picture style={{ display: 'contents' }}>
            <source
              srcSet={`${salamandraDeskWeb} 1x, ${salamandraDeskWeb2x} 2x`}
              type="image/webp"
            />
            <HeroImgSalamandraDesk
              src={salamandraDesk}
              srcSet={`${salamandraDesk} 285w, ${salamandraDesk2x} 570w`}
              width={285}
              height={400}
              alt="Plants"
              loading="lazy"
            />
          </picture>

          <Title>Salamandra</Title>
          <TitleDiscr>Cocktail bar</TitleDiscr>

          <picture style={{ display: 'contents' }}>
            <source
              srcSet={`${salamandraWeb} 1x, ${salamandraWeb2x} 2x`}
              type="image/webp"
            />
            <HeroImgSalamandra1
              src={salamandra}
              srcSet={`${salamandra} 285w, ${salamandra2x} 570w`}
              width={285}
              height={400}
              alt="Plants"
              loading="lazy"
            />
          </picture>

          <picture style={{ display: 'contents' }}>
            <source
              srcSet={`${salamandraDeskWeb} 1x, ${salamandraDeskWeb2x} 2x`}
              type="image/webp"
            />
            <HeroImgSalamandraDesk1
              src={salamandraDesk}
              srcSet={`${salamandraDesk} 285w, ${salamandraDesk2x} 570w`}
              width={285}
              height={400}
              alt="Plants"
              loading="lazy"
            />
          </picture>
        </TitleBox>
      </Hero>
      <Navigation catalog={catalog} group={group} menu={menu} isLoading={isLoading} setIsLoading={setIsLoading} error={error}/>
    </>
  );
};
