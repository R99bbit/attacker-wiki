import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./footer-styles";
  
const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "#245584", 
                   textAlign: "center", 
                   marginTop: "-40px" }}>
        Team ATT&CK Wiki
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>Team</Heading>
            <FooterLink href="https://github.com/R99bbit">Park Min (R99bbit)</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">준비중...</FooterLink>
          </Column>
          <Column>
            <Heading>Contribute</Heading>
            <FooterLink href="https://github.com/R99bbit/attacker-wiki">GitHub</FooterLink>
          </Column>
          <Column>
            <Heading>Contact</Heading>
            <FooterLink href="#">rjsdid7325@gmail.com</FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;