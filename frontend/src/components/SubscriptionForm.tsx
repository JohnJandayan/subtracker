'use client';

import { useState } from 'react';
import axios from 'axios';
import { TextField, Select, MenuItem, Button, FormControl, InputLabel, Box } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Subscription } from '@/types';

interface SubscriptionFormProps {
  onAdd?: (sub: Subscription) => void;
  subToEdit?: Subscription;
  onUpdate?: (sub: Subscription) => void;
  onClose?: () => void;
}

export default function SubscriptionForm({ onAdd, subToEdit, onUpdate, onClose }: SubscriptionFormProps) {
  const [serviceName, setServiceName] = useState(subToEdit?.service_name || '');
  const [cost, setCost] = useState(subToEdit?.cost || 0);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>(subToEdit?.billing_cycle || 'monthly');
  const [startDate, setStartDate] = useState<Date | null>(subToEdit ? new Date(subToEdit.start_date) : new Date());

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const payload = {
      service_name: serviceName,
      cost,
      billing_cycle: billingCycle,
      start_date: startDate?.toISOString(),
    };
    try {
      if (subToEdit) {
        const res = await axios.put(`/api/subscriptions/${subToEdit.id}`, payload, { headers: { Authorization: `Bearer ${token}` } });
        onUpdate?.(res.data[0]);
      } else {
        const res = await axios.post('/api/subscriptions', payload, { headers: { Authorization: `Bearer ${token}` } });
        onAdd?.(res.data[0]);
      }
      onClose?.();
      // Reset form
      setServiceName('');
      setCost(0);
      setBillingCycle('monthly');
      setStartDate(new Date());
    } catch (err: unknown) {
      console.error(err);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField label="Service Name" value={serviceName} onChange={(e) => setServiceName(e.target.value)} required />
        <TextField label="Cost" type="number" value={cost} onChange={(e) => setCost(parseFloat(e.target.value))} required />
        <FormControl>
          <InputLabel>Billing Cycle</InputLabel>
          <Select value={billingCycle} onChange={(e) => setBillingCycle(e.target.value as 'monthly' | 'yearly')} required>
            <MenuItem value="monthly">Monthly</MenuItem>
            <MenuItem value="yearly">Yearly</MenuItem>
          </Select>
        </FormControl>
        <DatePicker label="Start Date" value={startDate} onChange={(newValue) => setStartDate(newValue)} />
        <Button type="submit" variant="contained" color="primary">
          {subToEdit ? 'Update' : 'Add'} Subscription
        </Button>
        {subToEdit && <Button onClick={onClose} variant="outlined">Cancel</Button>}
      </Box>
    </LocalizationProvider>
  );
}