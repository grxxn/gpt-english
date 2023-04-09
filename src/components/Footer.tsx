import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <p className='footer-title'>GPT English</p>
      <p className='copy-txt'>copyright © grxxn</p>
      <p className='inquiry-txt'>For inquiries, please email devgrxxn@gmail.com</p>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  display: flex;
  align-items: end;
  height: 50px;
  font-size: 12px;
  line-height: 17px;
  letter-spacing: -0.045em;
  background-color: #f0f0f0;
  padding: 10px 80px;

  .footer-title {
    font-weight: 500;
    font-size: 20px;
    line-height: 29px;
    margin-right: 8px;
  }
  .copy-txt {
    color: #797979;
    margin-right: 26px;
  }
`;

export default Footer;