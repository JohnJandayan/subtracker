export interface Subscription {
  id: string;
  service_name: string;
  cost: number;
  billing_cycle: 'monthly' | 'yearly';
  start_date: string;
  user_id?: string;
}