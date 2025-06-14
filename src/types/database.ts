export interface WaitlistInfo {
  user_email: string;
  created_at: Date;
}

export interface WishlistInfo {
  user_email: string;
  user_name: string;
  user_surname: string;
  user_message: string;
  created_at: Date;
}

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
  alreadyExists?: boolean;
} 