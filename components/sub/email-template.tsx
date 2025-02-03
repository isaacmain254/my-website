import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Text,
} from "@react-email/components";
import * as React from "react";

interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const ContactEmail = ({ name, email, message }: ContactEmailProps) => (
  <Html>
    <Head />
    <Preview>
      New message from {name}
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src="https://isaacmaina.vercel.app/_next/image?url=%2Flogo.png&w=64&q=75"
          width="70"
          height="70"
          alt="My website logo"
          style={logo}
        />
        <Text style={paragraph}>Name: {name},</Text>
        <Text style={paragraph}>Name: {email},</Text>
        <Text style={paragraph}>
          Message:
          <br />
          {message}
        </Text>

        <Hr style={hr} />
        <Text style={footer}>Portfolio: https://isaacmaina.vercel.app</Text>
      </Container>
    </Body>
  </Html>
);

// KoalaWelcomeEmail.PreviewProps = {
//   userFirstname: "Alan",
// } as KoalaWelcomeEmailProps;

export default ContactEmailProps;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#5F51E8",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
