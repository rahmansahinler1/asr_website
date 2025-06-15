import { Pool } from 'pg';

// Determine the environment
const isProduction = process.env.NODE_ENV === 'production';

// Database configuration
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  database: isProduction ? 'asr_prod' : 'asr_dev',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || '',
  // Additional configuration for better connection handling
  max: 20, // Maximum number of clients in the pool
  idleTimeoutMillis: 30000, // Close idle clients after 30 seconds
  connectionTimeoutMillis: 2000, // Return an error after 2 seconds if connection could not be established
};

// Create a connection pool
const pool = new Pool(dbConfig);

// Handle pool errors
pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

// Log the database being used (helpful for debugging)
console.log(`Connected to database: ${dbConfig.database} (${isProduction ? 'production' : 'development'} mode)`);

// Database query function
export const query = async (text: string, params?: any[]) => {
  const client = await pool.connect();
  try {
    const result = await client.query(text, params);
    return result;
  } catch (error) {
    console.error('Database query error:', error);
    throw error;
  } finally {
    client.release();
  }
};

// Specific functions for our tables
export const addToWaitlist = async (email: string) => {
  const queryText = 'INSERT INTO waitlist_info (user_email) VALUES ($1) ON CONFLICT (user_email) DO NOTHING RETURNING *';
  const result = await query(queryText, [email]);
  return result.rows[0];
};

export const addToWishlist = async (email: string, name: string, surname: string, message: string) => {
  const queryText = 'INSERT INTO wishlist_info (user_email, user_name, user_surname, user_message) VALUES ($1, $2, $3, $4) RETURNING *';
  const result = await query(queryText, [email, name, surname, message]);
  return result.rows[0];
};

// Check if email exists in waitlist
export const checkEmailInWaitlist = async (email: string) => {
  const queryText = 'SELECT user_email FROM waitlist_info WHERE user_email = $1';
  const result = await query(queryText, [email]);
  return result.rows.length > 0;
};

// Close the pool (useful for graceful shutdown)
export const closePool = async () => {
  await pool.end();
}; 