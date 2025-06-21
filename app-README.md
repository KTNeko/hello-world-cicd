# Hello World CI/CD App

A simple Node.js application for testing CI/CD workflows with GitHub Actions.

## Features

- Express.js web server
- Calculator API with basic arithmetic operations
- TypeScript support
- Unit tests with Jest
- ESLint for code linting
- Prettier for code formatting

## API Endpoints

- `GET /` - Application info and available endpoints
- `GET /health` - Health check endpoint
- `POST /calculate/add` - Add two numbers
- `POST /calculate/subtract` - Subtract two numbers
- `POST /calculate/multiply` - Multiply two numbers
- `POST /calculate/divide` - Divide two numbers

## Installation

```bash
cd app
npm install
```

## Development

```bash
# Start development server
npm run dev

# Run tests
npm test

# Run linting
npm run lint

# Run type checking
npm run type-check

# Format code
npm run format
```

## Build

```bash
npm run build
```

## Testing the API

### Health Check
```bash
curl http://localhost:3000/health
```

### Calculator Operations
```bash
# Addition
curl -X POST http://localhost:3000/calculate/add \
  -H "Content-Type: application/json" \
  -d '{"a": 5, "b": 3}'

# Subtraction
curl -X POST http://localhost:3000/calculate/subtract \
  -H "Content-Type: application/json" \
  -d '{"a": 5, "b": 3}'

# Multiplication
curl -X POST http://localhost:3000/calculate/multiply \
  -H "Content-Type: application/json" \
  -d '{"a": 5, "b": 3}'

# Division
curl -X POST http://localhost:3000/calculate/divide \
  -H "Content-Type: application/json" \
  -d '{"a": 6, "b": 2}'
```

## CI/CD Workflow

This application is configured to work with the PR workflow in `.github/workflows/pr_workflow.yaml`. The workflow will:

1. Install dependencies
2. Run linting
3. Run type checking
4. Run unit tests
5. Build the application
6. Upload build artifacts

## Project Structure

```
app/
├── src/
│   ├── index.ts          # Main application file
│   └── calculator.ts     # Calculator class
├── __tests__/
│   └── calculator.test.ts # Unit tests
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── .eslintrc.js         # ESLint configuration
├── .prettierrc          # Prettier configuration
└── README.md            # This file
``` 