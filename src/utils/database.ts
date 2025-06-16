import { createClient } from '@supabase/supabase-js';

// Supabase configuration
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Specific functions for our tables
export const addToWaitlist = async (email: string) => {
  try {
    const { error } = await supabase
      .from('waitlist_info')
      .insert([{ email }]);

    if (error) {
      // Check if it's a duplicate email error
      if (error.code === '23505' || error.message.includes('duplicate')) {
        return null; // Indicates duplicate, handle in API
      }
      throw error;
    }

    // Return a minimal response since we can't get the actual data
    return { email, created_at: new Date().toISOString() };
  } catch (error) {
    console.error('Error adding to waitlist:', error);
    throw error;
  }
};

export const addToWishlist = async (email: string, name: string, surname: string, message: string) => {
  try {
    const { error } = await supabase
      .from('wishlist_info')
      .insert([{ 
        email: email,
        user_name: name, 
        user_surname: surname, 
        user_message: message 
      }]);

    if (error) {
      throw error;
    }

    // Return a minimal response since we can't get the actual data
    return { 
      email, 
      user_name: name, 
      user_surname: surname, 
      user_message: message,
      created_at: new Date().toISOString() 
    };
  } catch (error) {
    console.error('Error adding to wishlist:', error);
    throw error;
  }
};

// Check if email exists in waitlist
export const checkEmailInWaitlist = async (email: string) => {
  try {
    const { data, error } = await supabase
      .from('waitlist_info')
      .select('email')
      .eq('email', email)
      .single();

    if (error && error.code !== 'PGRST116') { // PGRST116 is "not found" error
      throw error;
    }

    return !!data; // Returns true if email exists, false otherwise
  } catch (error) {
    console.error('Error checking email in waitlist:', error);
    throw error;
  }
};

// Close the pool (useful for graceful shutdown)
export const closePool = async () => {
  // Supabase does not have a close method like PostgreSQL
  // This function is kept for consistency with the original code
}; 