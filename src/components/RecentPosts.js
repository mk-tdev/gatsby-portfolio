import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

const StyledRecentPosts = styled.div`
  margin: 2rem 0;
  .recent-posts {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  h2 {
    text-align: center;
  }
`;

const RecentPosts = () => {
  const data = useStaticQuery(graphql`
    query {
      angularImg: file(relativePath: { eq: "angular.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      gatsbyImg: file(relativePath: { eq: "gatsby.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const posts = [
    {
      title: 'Gatsby Blog',
      date: '2020-01-01',
      description: 'This is a blog post',
      img: 'gatsbyImg',
    },
    {
      title: 'Angular Blog',
      date: '2020-01-01',
      description: 'This is a blog post',
      img: 'angularImg',
    },
  ];

  return (
    <StyledRecentPosts>
      <div className="container">
        <h2>Recent Posts</h2>

        <div className="recent-posts">
          {posts.map((post, index) => (
            <div key={`post${index}`}>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <Img fluid={data[post.img]?.childImageSharp.fluid} />
            </div>
          ))}
        </div>
      </div>
    </StyledRecentPosts>
  );
};

export default RecentPosts;
