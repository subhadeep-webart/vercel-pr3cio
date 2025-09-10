export interface AccountUser {
  _id: string;
  name: string;
  email: string;
  phone: string;
  is_verified: boolean;
  is_artist: boolean;
  created_at: string;
  updated_at: string;
  user_name: string;
  avatar: string;
  categories:any[];
  __v: 0;
  isSubscribed: boolean;
}
