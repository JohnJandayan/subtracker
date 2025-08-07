'use client';

import { Container, Typography, Box } from '@mui/material';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsOfService() {
  return (
    <>
      <Header />
      <Container maxWidth="md" sx={{ mt: 4, mb: 4, flexGrow: 1 }}>
        <Typography variant="h4" gutterBottom>
          Terms of Service
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            1. Acceptance of Terms
          </Typography>
          <Typography paragraph>
            By accessing or using the Subtracker service, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.
          </Typography>
          
          <Typography variant="h5" gutterBottom>
            2. Description of Service
          </Typography>
          <Typography paragraph>
            Subtracker provides a subscription tracking service that allows users to manage and monitor their recurring subscriptions. The service includes features such as subscription management, cost visualization, and calculations.
          </Typography>
          
          <Typography variant="h5" gutterBottom>
            3. User Accounts
          </Typography>
          <Typography paragraph>
            You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
          </Typography>
          
          <Typography variant="h5" gutterBottom>
            4. User Content
          </Typography>
          <Typography paragraph>
            You retain ownership of any content you submit to the service. By submitting content, you grant us a worldwide, non-exclusive license to use, store, and display your content for the purpose of providing the service.
          </Typography>
          
          <Typography variant="h5" gutterBottom>
            5. Prohibited Conduct
          </Typography>
          <Typography paragraph>
            You agree not to:
          </Typography>
          <Typography component="ul" sx={{ pl: 4 }}>
            <li>Use the service for any illegal purpose</li>
            <li>Attempt to gain unauthorized access to the service or other user accounts</li>
            <li>Interfere with or disrupt the service or servers</li>
            <li>Introduce malware, viruses, or other harmful code</li>
          </Typography>
          
          <Typography variant="h5" gutterBottom>
            6. Termination
          </Typography>
          <Typography paragraph>
            We reserve the right to suspend or terminate your account if you violate these terms or for any other reason at our discretion.
          </Typography>
          
          <Typography variant="h5" gutterBottom>
            7. Disclaimer of Warranties
          </Typography>
          <Typography paragraph>
            The service is provided "as is" without warranties of any kind, either express or implied. We do not warrant that the service will be uninterrupted or error-free.
          </Typography>
          
          <Typography variant="h5" gutterBottom>
            8. Limitation of Liability
          </Typography>
          <Typography paragraph>
            In no event shall Subtracker be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of the service.
          </Typography>
          
          <Typography variant="h5" gutterBottom>
            9. Changes to Terms
          </Typography>
          <Typography paragraph>
            We may modify these terms at any time. We will notify you of significant changes by posting a notice on our website.
          </Typography>
          
          <Typography variant="h5" gutterBottom>
            10. Governing Law
          </Typography>
          <Typography paragraph>
            These terms shall be governed by the laws of the jurisdiction in which Subtracker operates, without regard to its conflict of law provisions.
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