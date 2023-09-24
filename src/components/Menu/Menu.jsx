import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  Img,
  MenuListItem,
  MenuList,
  MenuTitle,
  MenuSection,
  MenuSubTitle,
  InfoBox,
  DivForName,
  TitleItem,
  AlcogolItem,
  InfoItem,
  PriceItem,
  DetailsItem,
  DetailsText,
  DetailsTitle,
  Details,
} from './Menu.styled';
import { onLoaded, onLoading } from 'helpers/Loader/Loader';
import { Container } from 'components/baseStyles/CommonStyle.styled';

export const Menu = ({catalog, group, menu, isLoading, setIsLoading, error}) => {
  const { BASE_URL_IMG } = window.global;
  return (
    <Container>
      <MenuSection>
        {group.map(it => (
          <div style={{ width: '100%' }} key={uuidv4()}>
            <MenuTitle id={it}>{it}</MenuTitle>
            {catalog[`${it}`].map(cat => (
              <div key={uuidv4()}>
                {it !== cat && <MenuSubTitle>{cat}</MenuSubTitle>}
                <MenuList>
                  {menu.map(
                    item =>
                    (item.category === cat && item?.active) && (
                        <MenuListItem key={uuidv4()}>
                          {item.images !== 'none' && item.images && (
                            <Img
                              src={BASE_URL_IMG + item.images}
                              alt={item.name} loading="lazy"
                            />
                          )}
                          {/* {item.images === 'none' && (
                            <Img src={nophoto} alt={item.name} />
                          )} */}
                          <InfoBox>
                            <TitleItem>{item.name}</TitleItem>
                            <DivForName>
                              {item?.alcohol &&
                                item.alcohol.map(alc => (
                                  <AlcogolItem key={uuidv4()}>
                                    {alc}
                                  </AlcogolItem>
                                ))}
                            </DivForName>
                            <InfoItem>
                              <PriceItem>
                                <DetailsTitle>
                                  {item?.price} {item?.currency}
                                </DetailsTitle>
                              </PriceItem>
                              <DetailsItem>
                                {/* {item.details[0] !== '' &&
                                  item.details[0] !== undefined && (
                                    <DetailsTitle>Детальіше</DetailsTitle>
                                  )} */}
                              </DetailsItem>
                            </InfoItem>
                            <Details>
                              {item?.details &&
                                item.details.map(det => (
                                  <DetailsText key={uuidv4()}>
                                    {det}
                                  </DetailsText>
                                ))}
                            </Details>
                          </InfoBox>
                        </MenuListItem>
                      )
                  )}
                </MenuList>
              </div>
            ))}
          </div>
        ))}
        {isLoading ? onLoading() : onLoaded()}
        {error && <h1>{error}</h1>}
      </MenuSection>
    </Container>
  );
};
