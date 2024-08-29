import styled from "styled-components";

const FooterWrapper = styled.section`
  background-color: #ff5757;
  padding: 20px;
  display: flex;
  justify-content: center;
  column-gap: 20px;
`;

const Text = styled.p`
  font-size: 14px;
  color: #ede4e4;

  &:hover {
    color: #ffffff;
    cursor: pointer;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Text>About Us</Text>
      <Text>Advertise</Text>
      <Text>Ketentuan Penggunaan</Text>
      <Text>Kebijakan Data Pribadi</Text>
      <Text>Pedoman Media Siber</Text>
      <Text>Career</Text>
      <Text>Contact Us</Text>
    </FooterWrapper>
  );
};

export default Footer;
