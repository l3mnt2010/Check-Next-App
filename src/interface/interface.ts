import Register from "../pages/register/index";
// const API = "https://jsonplaceholder.typicode.com/users";
export interface UserStates {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface UserState {
  createDate: string;
  nameCamp: string;
  currentReview: string;
  beginReview: string;
  targetReview: string;
  status: string;
  campType: string;
  content: string;
  linkChiendich: string;
  id: string;
  currentLike: string;
}

export interface BlogState {
  postList: UserState[];
  user: UserState;
  isEdit: boolean;
}

export interface Data {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface Users {
  length: number;
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Data[];
  token: {
    token: Token;
  };
  information: Login;
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
interface Token {
  token: string;
}

export interface Register {
  email: string;
  password: string;
}

interface AuthState {
  isAuthenticated: boolean;
}
