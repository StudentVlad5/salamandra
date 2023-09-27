import React from 'react';
import { SEO } from 'utils/SEO';
import { Menu } from 'components/Menu/Menu';

const LandingPage = ({ catalog }) => {
  return (
    <>
      <SEO title="Menu" description="The Salamandra" />
      <Menu catalog={catalog} />
    </>
  );
};

export default LandingPage;
