export interface WaitlistInfo {
  id?: number;
  email: string;
  created_at?: string;
}

export interface WishlistInfo {
  id?: number;
  email: string;
  user_name: string;
  user_surname: string;
  user_message: string;
  created_at?: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
  alreadyExists?: boolean;
} 