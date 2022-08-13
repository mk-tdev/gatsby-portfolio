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

import RecentPosts from '../components/RecentPosts';

const HomeStyles = styled.div`
  .top-part {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }

    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }
  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

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
  margin: 0;
`;

function App({ data }) {
  console.log(data);
  const { social } = data.site.siteMetadata;
  const { heroImg, angularImg, gatsbyImg } = data;
  return (
    <HomeStyles>
      <div className="top-part">
        <div className="info">
          <h2>Home Page!</h2>

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
        </div>

        <div className="banner">
          <StyledImg fluid={heroImg.childImageSharp.fluid} />
        </div>
      </div>

      <div className="bottom-part">
        <RecentPosts />
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

    heroImg: file(relativePath: { eq: "proj_two.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
