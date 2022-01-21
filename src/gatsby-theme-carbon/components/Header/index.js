import React from 'react';
import Header from 'gatsby-theme-carbon/src/components/Header';

import companyLogo from '/src/images/logo-2x.svg';

const CustomHeader = (props) => (
  <Header {...props}>
<img src={companyLogo} height={19} alt="Beriffa Group Logo"/>
  </Header>
);

export default CustomHeader;
