import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import { calloutLink } from './Homepage.module.scss';

import Carbon from '/src/images/hero.png';

const FirstLeftText = () => <p></p>;

const FirstRightText = () => (
  <p>
    Welcome to beriffa.com{' '}
    <a href="https://github.com/carbon-design-system/gatsby-theme-carbon/blob/5fe12de31bb19fbfa2cab7c69cd942f55aa06f79/packages/example/src/gatsby-theme-carbon/templates/Homepage.js">
      pre-shadowed homepage template
    </a>
    . You can also provide <code>color</code> and <code>backgroundColor</code>{' '}
    props to suit your theme.
    <a
      className={calloutLink}
      href="https://github.com/carbon-design-system/gatsby-theme-carbon/blob/main/packages/example/src/gatsby-theme-carbon/templates/Homepage.js">
      Homepage source →
    </a>
  </p>
);

const SecondLeftText = () => <p>Help us make Beriffa.com better.</p>;

const SecondRightText = () => (
  <p>
    We welcome all feedback, designs, or ideas in order to produce the best possible experience for our users. If you’re interested in contributing, check out our github page to get started.
    <a
      className={calloutLink}
      href="https://github.com/BeriffaGroup">
      GitHub →
    </a>
  </p>
);

const BannerText = () => <h1></h1>;

const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image={Carbon} />,
 // FirstCallout: (
 //   <HomepageCallout
 //     backgroundColor="#030303"
 //     color="white"
 //     leftText={FirstLeftText}
 //     rightText={FirstRightText}
 //   />
 // ),
  SecondCallout: (
    <HomepageCallout
      leftText={SecondLeftText}
      rightText={SecondRightText}
      color="white"
      backgroundColor="#061f80"
    />
  ),
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
