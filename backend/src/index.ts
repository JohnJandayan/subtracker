import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import { createClient, User } from '@supabase/supabase-js';

// Extend Express Request interface
declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}

dotenv.config();

const app = express();
app.use(express.json());

const supabaseUrl = process.env.SUPABASE_URL as string;
const supabaseKey = process.env.SUPABASE_ANON_KEY as string;
const supabase = createClient(supabaseUrl, supabaseKey);

// Middleware to authenticate requests
const authenticate = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split('Bearer ')[1];
  if (!token) return res.status(401).json({ error: 'No token provided' });

  const { data: { user }, error } = await supabase.auth.getUser(token);
  if (error || !user) return res.status(401).json({ error: 'Invalid token' });

  req.user = user;
  next();
};

// Auth routes
app.post('/api/auth/signup', async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
});

app.post('/api/auth/login', async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
});

app.post('/api/auth/logout', async (req: Request, res: Response) => {
  // No server-side action needed; client removes token
  res.json({ message: 'Logged out' });
});

// Subscription routes
app.get('/api/subscriptions', authenticate, async (req: Request, res: Response) => {
  const { data, error } = await supabase
    .from('subscriptions')
    .select('*')
    .eq('user_id', req.user!.id);
  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
});

app.post('/api/subscriptions', authenticate, async (req: Request, res: Response) => {
  const { service_name, cost, billing_cycle, start_date } = req.body;
  const { data, error } = await supabase
    .from('subscriptions')
    .insert({ user_id: req.user!.id, service_name, cost, billing_cycle, start_date });
  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
});

app.put('/api/subscriptions/:id', authenticate, async (req: Request, res: Response) => {
  const { id } = req.params;
  const { service_name, cost, billing_cycle, start_date } = req.body;
  const { data, error } = await supabase
    .from('subscriptions')
    .update({ service_name, cost, billing_cycle, start_date })
    .eq('id', id)
    .eq('user_id', req.user!.id);
  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
});

app.delete('/api/subscriptions/:id', authenticate, async (req: Request, res: Response) => {
  const { id } = req.params;
  const { data, error } = await supabase
    .from('subscriptions')
    .delete()
    .eq('id', id)
    .eq('user_id', req.user!.id);
  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
});

// Health check
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'ok' });
});

if (require.main === module) {
  const port = process.env.PORT || 3001;
  app.listen(port, () => {
    console.log(`Backend running on port ${port}`);
  });
}

export default app;