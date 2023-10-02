import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { onLoaded, onLoading } from 'helpers/Loader/Loader';
import { Container } from 'components/baseStyles/CommonStyle.styled';
import { onFetchError } from 'helpers/Messages/NotifyMessages';
import { fetchData } from 'services/APIservice';
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

export const Menu = ({ catalog, activeSection }) => {
  const { BASE_URL_IMG } = window.global;
  const [menu, setMenu] = useState([]);
  const [, setGroup] = useState([]);
  const [subGroup, setSubGroup] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    (async function getData() {
      setIsLoading(true);
      try {
        const { data } = await fetchData(`/menu`);
        if (!data) {
          return onFetchError('Whoops, something went wrong');
        }
        setMenu(data);
        const listOfGroup = data.map(item => item.product);
        let uniqueGroup = [...new Set(listOfGroup)];
        setGroup(uniqueGroup);
        let uniqueCategory = {};
        for (const key of uniqueGroup) {
          uniqueCategory[key] = [];
          data.forEach(item => {
            if (item.product === key) {
              uniqueCategory[key].push(item.category);
            }
          });
        }
        for (const key in uniqueCategory) {
          uniqueCategory[`${key}`] = [...new Set(uniqueCategory[`${key}`])];
        }
        setSubGroup(uniqueCategory);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <Container>
      <MenuSection>
        {catalog &&
          catalog?.map(it => (
            <div
              className="menu-section"
              style={{ width: '100%' }}
              key={uuidv4()}
              id={it}
            >
              <MenuTitle id={it}>{it}</MenuTitle>
              {subGroup[`${it}`]?.map(cat => (
                <div key={uuidv4()}>
                  {it !== cat && <MenuSubTitle>{cat}</MenuSubTitle>}
                  <MenuList>
                    {menu?.map(
                      item =>
                        item.category === cat &&
                        item.product === it &&
                        item?.active && (
                          <MenuListItem
                            key={uuidv4()}
                            className={activeSection === it ? 'active' : ''}
                          >
                            {item.images !== 'none' && item.images && (
                              <Img
                                src={BASE_URL_IMG + item.images}
                                alt={item.name}
                                loading="lazy"
                              />
                            )}
                            {/* {item.images === 'none' && (
                            <Img src={nophoto} alt={item.name} />
                          )} */}
                            <InfoBox>
                              <TitleItem>{item.name}</TitleItem>
                              <DivForName>
                                {item?.alcohol &&
                                  item.alcohol?.map(alc => (
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
                                {item?.size.value !== 0 && (
                                  <DetailsItem>
                                    {item?.size.value} {item?.size.mesure}
                                  </DetailsItem>
                                )}
                              </InfoItem>
                              <Details>
                                {item?.details &&
                                  item.details?.map(det => (
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
        {error && onFetchError('Whoops, something went wrong')}
      </MenuSection>
    </Container>
  );
};
