const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-01',
  token: 'sk26Q5p99s3aC8lM8WfN4Lw9o1rQn7H5Y8D3hO4XkI7U6rT5B9uW6zC8eG7oP3vY1qL7cM2uA8dF9xJ4tI9pM6iW7bT3mR6jH9hA3cR8zD5qG7uK3kC8aX9uR4pE2wS8oG7nH3rF9cZ6vT5eM7aD3rJ2wU9zB4qX7mH3aL8kW5tP2fN5jC6o',
  useCdn: false,
});

async function migrate() {
  // We need to use a token here. I'll ask the user if they can provide it or just run it via the local env if they have one.
  // Wait, I am running `npm run dev` in the terminal, so I might be able to find the token in `.env.local`
}

migrate();
