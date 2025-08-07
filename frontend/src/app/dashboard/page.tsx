'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { Container, Typography, Button, Box } from '@mui/material';
import SubscriptionForm from '@/components/SubscriptionForm';
import SubscriptionList from '@/components/SubscriptionList';
import GanttChart from '@/components/GanttChart';
import TotalsCalculator from '@/components/TotalsCalculator';
import { Subscription } from '@/types';

export default function Dashboard() {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
      return;
    }

    const fetchSubscriptions = async () => {
      try {
        const res = await axios.get('/api/subscriptions', { headers: { Authorization: `Bearer ${token}` } });
        setSubscriptions(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSubscriptions();
  }, [router]);

  const addSubscription = (newSub: Subscription) => {
    setSubscriptions([...subscriptions, newSub]);
  };

  const updateSubscription = (updatedSub: Subscription) => {
    setSubscriptions(subscriptions.map(sub => sub.id === updatedSub.id ? updatedSub : sub));
  };

  const deleteSubscription = (id: string) => {
    setSubscriptions(subscriptions.filter(sub => sub.id !== id));
  };

  if (loading) return <Typography>Loading...</Typography>;

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Button onClick={() => { localStorage.removeItem('token'); router.push('/login'); }} variant="outlined" color="secondary">
        Logout
      </Button>
      <Box sx={{ my: 4 }}>
        <SubscriptionForm onAdd={addSubscription} />
      </Box>
      <SubscriptionList subscriptions={subscriptions} onUpdate={updateSubscription} onDelete={deleteSubscription} />
      <GanttChart subscriptions={subscriptions} />
      <TotalsCalculator subscriptions={subscriptions} />
    </Container>
  );
}