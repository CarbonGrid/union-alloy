import React from 'react';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

const Wrapper = styled.header`
  -webkit-clip-path: polygon(100% 0, 0 0, 0 70%, 50% 100%, 100% 70%);
  clip-path: polygon(100% 0, 0 0, 0 70%, 50% 100%, 100% 70%);
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    -webkit-clip-path: polygon(100% 0, 0 0, 0 90%, 50% 100%, 100% 90%);
    clip-path: polygon(100% 0, 0 0, 0 90%, 50% 100%, 100% 90%);
  }
  background: ${props => props.theme.gradient.rightToLeft};
  height: 300px;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    height: 300px;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    height: 275px;
  }
  position: relative;
  overflow: hidden;
`;

const Text = styled.div`
  color: ${props => props.theme.colors.white.base};
  z-index: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  max-width: ${props => props.theme.layout.base};
  padding: 0 2rem;
  margin-bottom: 3rem;
  align-items: center;
`;

const Subtitle = styled.p`
  max-width: 650px;
  color: ${props => props.theme.colors.white.light};
`;

//<h3>{date}</h3>
const Header = ({ children, title, date, cover }) => (
  <Wrapper>
    <Img fluid={cover || {} || [] || ''} />
    <Text>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <h1>{title}</h1>
      {children && <Subtitle>{children}</Subtitle>}
    </Text>
  </Wrapper>
);

export default Header;

//date: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
Header.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  cover: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.bool,
  ]),
};

Header.defaultProps = {
  children: false,
  cover: false,
  date: false,
  title: false,
};
