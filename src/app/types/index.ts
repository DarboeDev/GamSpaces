export interface User {
  id: number;
  clerkId: string;
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
  role: "agent" | "buyer";
  savedPosts: [];
  created_at: string;
  updated_at: string;
}
export interface Token {
  payload: User;
  iat: number;
  exp: number;
}

export interface Property {
  id: number;
  userId: number;
  type: number;
  title: string;
  price: string;
  description: string;
  bedrooms: string;
  bathrooms: string;
  square_feet: string;
  available: string;
  address: string;
  images: string[];
  longitude: string;
  latitude: string;
  created_at: Date;
  updated_at: Date;
}
