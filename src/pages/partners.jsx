import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const Partners = center => (
  <Layout>
    <Helmet title={'Partners | Union Alloy (Pte) Ltd'} />
    <Header title="Union Alloy">Partners</Header>
    <Container>
      <h3>Customer References</h3>
      <p>
        <strong>For more details of the projects that we have completed for these customers, please contact us !</strong>
      </p>
      <h3>Singapore</h3>
      <ul>
        <li>Keppel FELS / Keppel Shipyard</li>
        <li>PPL Shipyard</li>
        <li>Sembawang Shipyard</li>
        <li>Jurong Shipyard</li>
        <li>Sembawang Engineering</li>
        <li>Jurong Engineering</li>
        <li>Brown &amp; Root Singapore</li>
        <li>McDermott Singapore</li>
        <li>Shell Refinery</li>
        <li>Exxon Mobil</li>
        <li>Sembawang Utility Terminal</li>
        <li>Chiyoda</li>
        <li>Foster Wheeler</li>
        <li>Bechtel</li>
        <li>C.W. Singapore</li>
        <li>Kvaener</li>
        <li>ABB</li>
        <li>Single Buoy Moorings (SBM)</li>
      </ul>
      <hr></hr>
      <h3>Malaysia</h3>
      <ul>
        <li>Esso (EPMI)</li>
        <li>Petranas Carigali</li>
        <li>Shell Bintulu</li>
        <li>Shell Miri</li>
        <li>Technip Geoproduction</li>
        <li>Grace Packaging</li>
        <li>Malaysia Shipyard &amp; Engineering</li>
        <li>Penang Shipyard</li>
        <li>Sime Sembawang Engineering</li>
        <li>Transfield</li>
        <li>JKR - Public Works Dept</li>
        <li>Sumatec</li>
        <li>Shapadu</li>
        <li>Kvaerner</li>
        <li>Brooks Dockyard Shipyard</li>
        <li>GPP 5 &amp; 6</li>
      </ul>
      <hr></hr>
      <h3>Indonesia</h3>
      <ul>
        <li>Pertamina Balikpapan Refinery</li>
        <li>Pertamina Cirebon</li>
        <li>Pertamina Cilacap Refinery</li>
        <li>Pertamina Dumai</li>
        <li>Pertamina Pledju</li>
        <li>Arco</li>
        <li>Caltex</li>
        <li>Total</li>
        <li>Exxon Mobil</li>
        <li>Conoco</li>
        <li>Unocal</li>
        <li>BP Amoco</li>
        <li>Gulf Resources</li>
        <li>Marathon</li>
        <li>Maxus</li>
        <li>Premier Oil</li>
        <li>Santa FE</li>
        <li>McDermott</li>
        <li>Asamara</li>
        <li>Gunanusa Fabrication</li>
        <li>Fluor Daniel</li>
        <li>JGC Indonesia</li>
        <li>Chiyoda</li>
        <li>IKPT</li>
        <li>PLN - Electricity Board</li>
        <li>Black &amp; Veatch</li>
        <li>PT Badak NGL</li>
        <li>PT Gresik</li>
        <li>PT Pupuk Fertiliser</li>
        <li>PT Stanvac</li>
        <li>Energy Equity</li>
        <li>Exspan</li>
        <li>Kufpec Indonesia</li>
        <li>Vico Indonesia</li>
      </ul>
    </Container>
  </Layout>
);

export default Partners;

Partners.propTypes = {
  center: PropTypes.object,
};
