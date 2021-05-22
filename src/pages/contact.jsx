import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const Contact = center => (
  <Layout>
    <Helmet title={'Contact | Union Alloy (Pte) Ltd'} />
    <Header title="Union Alloy">Contact</Header>
    <Container>
      <h3>Contact Us</h3>
      <p>
        <strong>For more details of the projects that we have completed for these customers, please contact us !</strong>
      </p>
      <hr></hr>
      <h5>Contact Information:</h5>
      <p>
        9 Woodlands Sector 1<br></br>
        Singapore 738358
      </p>
      <p>
        Phone: (65) 6741 5133<br></br>
        Fax: (65) 6744 0989<br></br>
        Website: <a href="https://www.unionalloy.com.sg">https://www.unionalloy.com.sg</a><br></br>
        Email: <a href="mailto:sales@unionalloy.com.sg">sales@unionalloy.com.sg</a>
      </p>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15954.141446149953!2d103.805087!3d1.453045!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da136eb178a7e5%3A0x286d52a2f856ef1e!2s9%20Woodlands%20Sector%201%2C%20Singapore%20738358!5e0!3m2!1sen!2ssg!4v1621689325905!5m2!1sen!2ssg" style={{border:0,width:"100%",height:450}} allowFullScreen="" loading="lazy"></iframe>
    </Container>
  </Layout>
);

export default Contact;

Contact.propTypes = {
  center: PropTypes.object,
};
