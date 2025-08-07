'use client';

import { useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableHead, TableRow, Button, Box } from '@mui/material';
import SubscriptionForm from './SubscriptionForm'; // For editing, but simplified
import { Subscription } from '@/types';

interface SubscriptionListProps {
  subscriptions: Subscription[];
  onUpdate: (sub: Subscription) => void;
  onDelete: (id: string) => void;
}

export default function SubscriptionList({ subscriptions, onUpdate, onDelete }: SubscriptionListProps) {
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleDelete = async (id: string) => {
    const token = localStorage.getItem('token');
    try {
      await axios.delete(`/api/subscriptions/${id}`, { headers: { Authorization: `Bearer ${token}` } });
      onDelete(id);
    } catch (err: unknown) {
      console.error(err);
    }
  };

  // For simplicity, edit uses same form, but in real would have edit mode
  const handleUpdate = (updatedSub: Subscription) => {
    onUpdate(updatedSub);
    setEditingId(null);
  };

  return (
    <Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Service</TableCell>
            <TableCell>Cost</TableCell>
            <TableCell>Cycle</TableCell>
            <TableCell>Start Date</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {subscriptions.map((sub) => (
            <TableRow key={sub.id}>
              <TableCell>{sub.service_name}</TableCell>
              <TableCell>${sub.cost}</TableCell>
              <TableCell>{sub.billing_cycle}</TableCell>
              <TableCell>{new Date(sub.start_date).toLocaleDateString()}</TableCell>
              <TableCell>
                <Button onClick={() => setEditingId(sub.id)}>Edit</Button>
                <Button onClick={() => handleDelete(sub.id)} color="error">Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {editingId && (
        <Box sx={{ mt: 2 }}>
          <SubscriptionForm subToEdit={subscriptions.find(sub => sub.id === editingId)} onUpdate={handleUpdate} onClose={() => setEditingId(null)} />
        </Box>
      )}
    </Box>
  );
}