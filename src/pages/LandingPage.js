import React from 'react';
import { SEO } from 'utils/SEO';
import { Menu } from 'components/Menu/Menu';

const LandingPage = ({catalog, group, menu, isLoading, setIsLoading, error}) => {
  return (
    <>
      <SEO title="Menu" description="The Salamandra" />
      <Menu catalog={catalog} group={group} menu={menu} isLoading={isLoading} setIsLoading={setIsLoading} error={error}/>
    </>
  );
};

export default LandingPage;
