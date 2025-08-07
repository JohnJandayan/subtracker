'use client';

import { Container, Typography, Box } from '@mui/material';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Providers from '../providers';

export default function PrivacyPolicy() {
  return (
    <Providers>
      <Header />
      <Container maxWidth="md" sx={{ mt: 4, mb: 4, flexGrow: 1 }}>
        <Typography variant="h4" gutterBottom>
          Privacy Policy
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            1. Introduction
          </Typography>
          <Typography paragraph>
            This Privacy Policy explains how Subtracker ("we," "us," or "our") collects, uses, and shares your personal information when you use our subscription tracking service.
          </Typography>
          
          <Typography variant="h5" gutterBottom>
            2. Information We Collect
          </Typography>
          <Typography paragraph>
            We collect information you provide directly to us, including:
          </Typography>
          <Typography component="ul" sx={{ pl: 4 }}>
            <li>Account information (email address, password)</li>
            <li>Subscription details (service names, costs, billing cycles, start dates)</li>
            <li>Usage data (how you interact with our application)</li>
          </Typography>
          
          <Typography variant="h5" gutterBottom>
            3. How We Use Your Information
          </Typography>
          <Typography paragraph>
            We use your information to:
          </Typography>
          <Typography component="ul" sx={{ pl: 4 }}>
            <li>Provide, maintain, and improve our services</li>
            <li>Process and complete transactions</li>
            <li>Send you technical notices and support messages</li>
            <li>Respond to your comments and questions</li>
          </Typography>
          
          <Typography variant="h5" gutterBottom>
            4. Data Security
          </Typography>
          <Typography paragraph>
            We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
          </Typography>
          
          <Typography variant="h5" gutterBottom>
            5. Data Retention
          </Typography>
          <Typography paragraph>
            We retain your information as long as your account is active or as needed to provide services. We may retain certain information even after you delete your account if necessary to comply with legal obligations or prevent fraud.
          </Typography>
          
          <Typography variant="h5" gutterBottom>
            6. Changes to This Policy
          </Typography>
          <Typography paragraph>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page.
          </Typography>
          
          <Typography variant="h5" gutterBottom>
            7. Contact Us
          </Typography>
          <Typography paragraph>
            If you have questions about this Privacy Policy, please contact us at privacy@subtracker.com.
          </Typography>
          
          <Typography variant="body2" sx={{ mt: 4 }}>
            Last updated: {new Date().toLocaleDateString()}
          </Typography>
        </Box>
      </Container>
      <Footer />
    </Providers>
  );
}