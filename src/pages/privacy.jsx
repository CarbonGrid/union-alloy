import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const Privacy = center => (
  <Layout>
    <Helmet title={'Privacy | Union Alloy (Pte) Ltd'} />
    <Header title="Union Alloy">Privacy Policy</Header>
    <Container>
      <h3>Privacy Policy</h3>
      <p><strong>What information do we collect?</strong><br></br>
      We collect information from you when you register on our site, place an order, subscribe to our newsletter, respond to a survey or fill out a form.
      When ordering or registering on our site, as appropriate, you may be asked to enter your: name, e-mail address, mailing address, phone number, credit card information or social security number. You may, however, visit our site anonymously.
      </p>

      <p><strong>What do we use your information for?</strong><br></br>
      Any of the information we collect from you may be used in one of the following ways:
      </p>
      <p style={{marginTop: 1 + 'em'}}>
        <ul type="square">
          <li>To personalize your experience
            <br></br>
            (your information helps us to better respond to your individual needs)
          </li>
          <li>To improve our website
            <br></br>
            (we continually strive to improve our website offerings based on the information and feedback we receive from you)
          </li>
          <li>To improve customer service
            <br></br>
            (your information helps us to more effectively respond to your customer service requests and support needs)
          </li>
          <li>To process transactions
            <br></br>
            We may share or sell information with third parties for marketing or other purposes without your consent.
          </li>
          <li>To administer a contest, promotion, survey or other site feature</li>
          <li>To send periodic emails
            <br></br>
            The email address you provide for order processing, may be used to send you information and updates pertaining to your order, in addition to receiving occasional company news, updates, related product or service information, etc.
          </li>
        </ul>
      </p>
      <p>
      Note: If at any time you would like to unsubscribe from receiving future emails, we include detailed unsubscribe instructions at the bottom of each email.
      </p>
      <p><strong>How do we protect your information?</strong><br></br>
      We implement a variety of security measures to maintain the safety of your personal information when you place an order or access your personal information.
      We offer the use of a secure server. All supplied sensitive/credit information is transmitted via Secure Socket Layer (SSL) technology and then encrypted into our Payment gateway providers database only to be accessible by those authorized with special access rights to such systems, and are required to keep the information confidential.
      After a transaction, your private information (credit cards, social security numbers, financials, etc.) will not be kept on file for more than 60 days.
      </p>

      <p><strong>Do we use cookies?</strong><br></br>
      Yes (Cookies are small files that a site or its service provider transfers to your computers hard drive through your Web browser (if you allow) that enables the sites or service providers systems to recognize your browser and capture and remember certain information
      We use cookies to help us remember and process the items in your shopping cart, understand and save your preferences for future visits, keep track of advertisements and compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future. We may contract with third-party service providers to assist us in better understanding our site visitors. These service providers are not permitted to use the information collected on our behalf except to help us conduct and improve our business.
      If you prefer, you can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies via your browser settings. Like most websites, if you turn your cookies off, some of our services may not function properly. However, you can still place orders over the telephone or by contacting customer service.
      </p>

      <p><strong>Do we disclose any information to outside parties?</strong><br></br>
      We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others rights, property, or safety. However, non-personally identifiable visitor information may be provided to other parties for marketing, advertising, or other uses.
      </p>

      <p><strong>Third party links</strong><br></br>
      Occasionally, at our discretion, we may include or offer third party products or services on our website. These third party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.
      </p>

      <p><strong>Terms and Conditions</strong><br></br>
      Please also visit our Terms and Conditions section establishing the use, disclaimers, and limitations of liability governing the use of our website at <a href="https://www.unionalloy.com.sg">https://www.unionalloy.com.sg</a>
      </p>

      <p><strong>Changes to our Privacy Policy</strong><br></br>
      If we decide to change our privacy policy, we will post those changes on this page.
      </p>

      <p><strong>Contacting Us</strong><br></br>
      If there are any questions regarding this privacy policy you may contact us using the information below.
      </p>
      <p>
        www.unionalloy.com.sg<br></br>
        227 Kaki Bukit Avenue 1<br></br>
        #02-00<br></br>
        Singapore 416048<br></br>
        <a href="mailto:sales@unionalloy.com.sg">sales@unionalloy.com.sg</a>
      </p>
    </Container>
  </Layout>
);

export default Privacy;

Privacy.propTypes = {
  center: PropTypes.object,
};
