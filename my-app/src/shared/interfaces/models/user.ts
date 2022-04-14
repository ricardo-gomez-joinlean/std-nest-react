import { IGlobalModel } from "./global"

export interface IUser extends IGlobalModel {
  name: string;
  email: string;
  password: string;
}