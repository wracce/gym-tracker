import { Gender } from "./gender";

export type User = {
  userName: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  gender: Gender;
};
