import Link from 'next/link';
import { Container, Typography, Button, Box } from '@mui/material';

export default function Home() {
  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', mt: 8 }}>
      <Typography variant="h2" gutterBottom>
        Welcome to Subtracker
      </Typography>
      <Typography variant="h5" gutterBottom>
        Manage your subscriptions effortlessly
      </Typography>
      <Box sx={{ mt: 4 }}>
        <Button variant="contained" color="primary" sx={{ mr: 2 }} component={Link} href="/login">
          Login
        </Button>
        <Button variant="outlined" color="primary" component={Link} href="/signup">
          Sign Up
        </Button>
      </Box>
    </Container>
  );
}
