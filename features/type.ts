export type Category = {
  id: number;
  name: string;
  image: string;
};

export type User = {
  id: number;
  name: string;
  role: string;
  email: string;
  password: string;
  avatar: string;
};

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: number;
  images: string[];
};
export type Updateuser = {
  email: string;
  name: string;
  password: string;
  role: string;
  avatar: string;
};
