'use client';

import { Box, Container, Typography, Link as MuiLink } from '@mui/material';
import Link from 'next/link';

export default function Footer() {
  return (
    <Box component="footer" sx={{ py: 3, mt: 'auto', backgroundColor: 'primary.main', color: 'white' }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <Typography variant="body2">
            © {new Date().getFullYear()} Subtracker. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Link href="/privacy" passHref>
              <MuiLink color="inherit" underline="hover">
                Privacy Policy
              </MuiLink>
            </Link>
            <Link href="/terms" passHref>
              <MuiLink color="inherit" underline="hover">
                Terms of Service
              </MuiLink>
            </Link>
            <Link href="/cookies" passHref>
              <MuiLink color="inherit" underline="hover">
                Cookie Policy
              </MuiLink>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}