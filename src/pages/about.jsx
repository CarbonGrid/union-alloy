import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const About = center => (
  <Layout>
    <Helmet title={'About Us | Union Alloy (Pte) Ltd'} />
    <Header title="Union Alloy">About Us</Header>
    <Container center={center}>
      <h3>The Company</h3>
      <p>
      <strong>UNION ALLOY PTE LTD </strong>is a composite specialist company. We have over 25 years experience fabricating and installing pipe. We have a 10,000 sq. ft pipe fab shop in Singapore devoted to fiberglass pipe fabrication. We have complete computer drafting services including the ability to generate piping isometrics. We can deliver a complete and piece marked set of isometric drawings to you for easy field erection of piping that we fabricate. Guaranteed material takeoffs and material control are another essential service that we offer along with our fabrication service.
      </p>
      <hr></hr>
      <h3>Our Strengths</h3>
      <p>
      <strong>UNION ALLOY's </strong>strengths are its capabilities to offer the most optimized packages using the highest quality and reliable products as well as the most suitable technology available to provide an engineering value added and cost effective solution that include the following:
      </p>
      <ul type="none" style={{marginTop: 2 + 'em'}}>
        <li>Engineering design capabilities</li>
        <li>Excellent and regional wide experiences</li>
        <li>Flexibility of approach</li>
        <li>Experienced staff and labour resources</li>
        <li>In-house services</li>
        <li>Fast Mobilization / Demobilization</li>
        <li>Excellent after-sales services</li>
      </ul>
      <hr></hr>
      <h3>Our Services</h3>
      <p>
        <strong>UNION ALLOY has the flexibility and versatility that enable us to undertake any project that requires the following services:</strong>
      </p>
      <p>
      UNION ALLOY is a leading supplier, engineer and fabricator of fiberglass grating and structural systems for the Offshore, Marine, Industrial and Chemical Industry. We have 10,000 sq. ft fabrication shop in Singapore devoted to fiberglass gratings and structures fabrication.
      </p>
      <p>
      In addition, we can offer a complete turnkey installation from the initial design and engineering phase to the implementation and installation of fiberglass gratings and structures; and this is well taken care of by our installation crews, who are all well-make the safest and most economical fiberglass structures in the industry.
      </p>
      <p>
      For more information on our products and services, please feel free to contact us anytime at the respective office... and we look forward to demonstrating our commitment and technical expertise as part of your solution!
      </p>
      
    </Container>
  </Layout>
);

export default About;

About.propTypes = {
  center: PropTypes.object,
};
