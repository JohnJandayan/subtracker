import { Typography, Box } from '@mui/material';

interface TotalsCalculatorProps {
  subscriptions: any[];
}

export default function TotalsCalculator({ subscriptions }: TotalsCalculatorProps) {
  let monthlyTotal = 0;
  let annualTotal = 0;

  subscriptions.forEach((sub) => {
    if (sub.billing_cycle === 'monthly') {
      monthlyTotal += sub.cost;
      annualTotal += sub.cost * 12;
    } else {
      monthlyTotal += sub.cost / 12;
      annualTotal += sub.cost;
    }
  });

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6">Totals</Typography>
      <Typography>Monthly: ${monthlyTotal.toFixed(2)}</Typography>
      <Typography>Annual: ${annualTotal.toFixed(2)}</Typography>
    </Box>
  );
}