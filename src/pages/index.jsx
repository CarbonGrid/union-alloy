import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import { Header, PostList } from 'components';
import { Layout } from 'layouts';
import Img from 'gatsby-image';

const PostWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 4rem 4rem 1rem 4rem;
  @media (max-width: 1000px) {
    margin: 4rem 2rem 1rem 2rem;
  }
  @media (max-width: 700px) {
    margin: 4rem 1rem 1rem 1rem;
  }
`;
//<Header title="Union Alloy">Specialists in Fiberglass Piping System for Offshore, Marine, Industrial & Chemical</Header>
const Index = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <Helmet title={'Homepage | Union Alloy (Pte) Ltd'} />
      <Header cover={data.headerBackground.childImageSharp.fluid}></Header>
      <PostWrapper>
        {edges.map(({ node }) => {
          let { id, excerpt, frontmatter } = node;
          let { cover, path, title, date } = frontmatter;
          if (title == "Fibreglass Gratings"){
            title = "Fibreglass";
            const nbsp = '\u00A0';
            const breakline = '\u000A';
            excerpt = ["Gratings", "Handrail System", "Structure"].join(breakline);
          } else if (title == "Strainers") {
            excerpt = <Img fluid={data.mueller.childImageSharp.fluid}></Img>;
          }
          return (
            <PostList
              key={id}
              cover={cover.childImageSharp.fluid}
              path={path}
              title={title}
              date={date}
              excerpt={excerpt}
            />
          );
        })}
      </PostWrapper>
      <img src="/img/iso-logo.png#center"></img>
      <img src="/img/bizsafe-star-logo.jpg#center"></img>
      <img src="/img/iso-45001-2018.jpg#center"></img>
    </Layout>
  );
};

export default Index;

Index.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            excerpt: PropTypes.string,
            frontmatter: PropTypes.shape({
              cover: PropTypes.object.isRequired,
              path: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
              date: PropTypes.string.isRequired,
              tags: PropTypes.array,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
};

export const query = graphql`
  query {
    headerBackground: file(relativePath: { eq: "pic1.png" }) {
      childImageSharp {
        fluid(
          maxHeight: 1280
          maxWidth: 1920
          quality: 100
          duotone: { highlight: "#386eee", shadow: "#2323be", opacity: 10 }
        ) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    mueller: file(relativePath: { eq: "mueller.png" }) {
      childImageSharp {
        fluid(
          quality: 100
        ) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    allMarkdownRemark(
      limit: 6
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 75)
          frontmatter {
            title
            path
            tags
            date(formatString: "MM.DD.YYYY")
            cover {
              childImageSharp {
                fluid(
                  maxWidth: 1000
                  quality: 100
                  traceSVG: { color: "#2B2B2F" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;
