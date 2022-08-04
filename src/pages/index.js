import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

const HomeStyles = styled.div`
  .icons {
    display: inline-grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
  }

  .icons svg {
    width: 30px;
    height: 30px;
    color: {(props) => props.theme.colors.socialIcons};
  }
`;

const StyledImg = styled(Img)`
  margin: -1rem;
`;

function App({ data }) {
  console.log(data);
  const { social } = data.site.siteMetadata;
  return (
    <HomeStyles>
      <h2>Home Page!</h2>

      <StyledImg fluid={data.heroImg.childImageSharp.fluid} />

      <div className="icons">
        <a href={social.facebook} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href={social.linkedin} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href={social.twitter} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
    </HomeStyles>
  );
}

export default App;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        social {
          facebook
          linkedin
          twitter
        }
      }
    }

    heroImg: file(relativePath: { eq: "banner.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
