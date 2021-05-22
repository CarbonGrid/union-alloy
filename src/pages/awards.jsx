import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const Awards = center => (
  <Layout>
    <Helmet title={'Awards | Union Alloy (Pte) Ltd'} />
    <Header title="Union Alloy">Awards</Header>
    <Container center={center}>
      <p>
        <h3>Awards & Quality</h3>
        <img src="/img/certificate4-large.jpg" loading="lazy"></img>
        <img src="/img/certificate3-large.jpg" loading="lazy"></img>
        <img src="/img/certificate2-large.jpg" loading="lazy"></img>
        <img src="/img/certificate1-large.jpg" loading="lazy"></img>
      </p>
    </Container>
  </Layout>
);

export default Awards;

Awards.propTypes = {
  center: PropTypes.object,
};
