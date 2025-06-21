import express, { Request, Response } from 'express';
import { Calculator } from './calculator';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Calculator endpoints
app.post('/calculate/add', (req: Request, res: Response) => {
  try {
    const { a, b } = req.body;
    const result = Calculator.add(a, b);
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: 'Invalid input' });
  }
});

app.post('/calculate/subtract', (req: Request, res: Response) => {
  try {
    const { a, b } = req.body;
    const result = Calculator.subtract(a, b);
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: 'Invalid input' });
  }
});

app.post('/calculate/multiply', (req: Request, res: Response) => {
  try {
    const { a, b } = req.body;
    const result = Calculator.multiply(a, b);
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: 'Invalid input' });
  }
});

app.post('/calculate/divide', (req: Request, res: Response) => {
  try {
    const { a, b } = req.body;
    const result = Calculator.divide(a, b);
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: 'Invalid input' });
  }
});

// Root endpoint
app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Hello World CI/CD App',
    version: '1.0.0',
    endpoints: {
      health: 'GET /health',
      add: 'POST /calculate/add',
      subtract: 'POST /calculate/subtract',
      multiply: 'POST /calculate/multiply',
      divide: 'POST /calculate/divide',
    },
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app; 