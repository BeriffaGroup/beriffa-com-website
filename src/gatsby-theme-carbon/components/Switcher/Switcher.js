import React from 'react';
import Switcher from 'gatsby-theme-carbon/src/components/Switcher'; // default export, no brackets needed
import { SwitcherLink } from 'gatsby-theme-carbon/src/components/Switcher'; // add brackets
import { SwitcherDivider } from 'gatsby-theme-carbon/src/components/Switcher'; // add brackets

const CustomSwitcher = (props) => (
  <Switcher {...props}>
    <SwitcherLink {...props}  href="https://somelinks.id">
      Japan Festival
    </SwitcherLink>
    <SwitcherLink {...props} href="https://somelinks.id">
      Japan Festival Media
    </SwitcherLink>
    <SwitcherLink {...props} href="https://somelinks.id">
      Japan Festival Platfrom
    </SwitcherLink>
    <SwitcherDivider>Technology Stack</SwitcherDivider>
  </Switcher>
);

export default CustomSwitcher;