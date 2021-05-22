import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.footer`
  position: relative;
  padding-top: 2rem;
  bottom: 0;
  box-shadow: ${props => props.theme.shadow.footer};
  background: ${props => props.theme.gradient.leftToRight};
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    padding-top: 7rem;
  }
`;

const Text = styled.div`
  margin: 0;
  padding-bottom: 2rem;
  text-align: center;
  color: ${props => props.theme.colors.white.light};
`;

const Footer = () => (
  <Wrapper>
    <Text>
      <span>
        <a href="/">Home</a> | 
        <a href="/about">About Us</a> | 
        <a href="/about">Products & Services</a> | 
        <a href="/awards">Awards & Quality</a> | 
        <a href="/partners">Partners</a> | 
        <a href="/contact">Contact Us</a> | 
        <a href="/privacy">Privacy</a>
      </span>
    </Text>
    <Text>
    © 2021 Union Alloy (Pte) Ltd. All rights reserved.
    </Text>
  </Wrapper>
);
export default Footer;
