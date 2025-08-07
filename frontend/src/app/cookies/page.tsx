'use client';

import { Container, Typography, Box } from '@mui/material';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CookiePolicy() {
  return (
    <>
      <Header />
      <Container maxWidth="md" sx={{ mt: 4, mb: 4, flexGrow: 1 }}>
        <Typography variant="h4" gutterBottom>
          Cookie Policy
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            1. What Are Cookies
          </Typography>
          <Typography paragraph>
            Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners.
          </Typography>
          
          <Typography variant="h5" gutterBottom>
            2. How We Use Cookies
          </Typography>
          <Typography paragraph>
            Subtracker uses cookies for the following purposes:
          </Typography>
          <Typography component="ul" sx={{ pl: 4 }}>
            <li>Authentication: We use cookies to identify you when you visit our website and as you navigate our site.</li>
            <li>Security: We use cookies as an element of the security measures to protect user accounts, including preventing fraudulent use of login credentials.</li>
            <li>Preferences: We use cookies to store your preferences regarding the use of cookies more generally.</li>
            <li>Analysis: We use cookies to help us analyze the use and performance of our website and services.</li>
          </Typography>
          
          <Typography variant="h5" gutterBottom>
            3. Types of Cookies We Use
          </Typography>
          <Typography paragraph>
            We use both session and persistent cookies:
          </Typography>
          <Typography component="ul" sx={{ pl: 4 }}>
            <li>Session cookies: These are temporary cookies that are deleted when you close your browser.</li>
            <li>Persistent cookies: These remain on your device until they expire or you delete them.</li>
          </Typography>
          
          <Typography variant="h5" gutterBottom>
            4. Third-Party Cookies
          </Typography>
          <Typography paragraph>
            Some cookies may be placed by third parties when you use our service. These third parties may include analytics providers, payment processors, and advertising networks. We do not have control over these third-party cookies.
          </Typography>
          
          <Typography variant="h5" gutterBottom>
            5. Managing Cookies
          </Typography>
          <Typography paragraph>
            Most browsers allow you to refuse to accept cookies and to delete cookies. The methods for doing so vary from browser to browser. Please refer to your browser's help documentation for information on how to manage cookies.
          </Typography>
          <Typography paragraph>
            Please note that blocking cookies may impact your experience on our website and may limit your ability to use certain features.
          </Typography>
          
          <Typography variant="h5" gutterBottom>
            6. Changes to This Policy
          </Typography>
          <Typography paragraph>
            We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new policy on this page.
          </Typography>
          
          <Typography variant="h5" gutterBottom>
            7. Contact Us
          </Typography>
          <Typography paragraph>
            If you have questions about our use of cookies, please contact us at cookies@subtracker.com.
          </Typography>
          
          <Typography variant="body2" sx={{ mt: 4 }}>
            Last updated: {new Date().toLocaleDateString()}
          </Typography>
        </Box>
      </Container>
      <Footer />
    </>
  );
}