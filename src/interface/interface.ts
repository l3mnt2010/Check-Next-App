import { StaticImageData } from "next/image";
import { about } from "../item.global";

export interface Data {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface Users {
  data: Data[];
}

export interface Pages {
  length: number;
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
}

export interface Login {
  email: string;
  password: string;
}
export interface Add {
  name: string;
  job: string;
}

export interface Menus {
  onBolds: () => void;
  onCloses: () => void;
}

export interface Abouts {
  title: string;
  text: string;
}

export interface Register {
  email: string;
  password: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}
export interface AuthState {
  isAuthenticated: boolean;
  token: {
    token: {
      token: string | null;
    };
  };
}

export interface AuthRegister {
  isAuthenRegister: boolean;
  token: {
    token: {
      token: string | null;
    };
  };
  id: number | null;
}

export interface ResRegister {
  token: string | null;
  id: number | null;
}

export interface Features {
  img: StaticImageData;
  title: string;
  text: string;
}

export interface Item {
  placeholder: string;
  type: string;
}

export interface GetItem {
  image: StaticImageData;
}

export interface Reactangles {
  img: StaticImageData;
  number: number;
  interact: string;
}

export interface Recent {
  img: StaticImageData;
  text: string;
}
export interface Team {
  avatar: StaticImageData;
  name: string;
  job: string;
  about: string;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface ListProduct {
  product: Product[];
}

export interface AboutCard {
  image: string;
  title: string;
  price: number;
  rate: number;
  rate_count: number;
  id: number;
}

export interface OnlyProduct {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export interface Only_Pro_Duct extends OnlyProduct {
  size: string;
}
export interface Only_Pro_Duct_Total extends Only_Pro_Duct {
  total: number;
  handler: () => void;
}

export interface Cart {
  cart: Only_Pro_Duct[];
}
