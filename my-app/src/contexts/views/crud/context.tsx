import { createContext } from "react";
import { Interfaces } from "../../../shared"

export interface IMainState {
  listItems: Interfaces.Models.IUser[];
  form: Interfaces.Models.IUser;
  isNew: boolean;
  isLoading: boolean;
  showModal: boolean;
}

export type MainContextProps = {
  state: IMainState;
  setUserForm: (user: Interfaces.Models.IUser) => void;
  setList: (users: Interfaces.Models.IUser[]) => void;
  setLoading: (loading: boolean) => void;
  toggleModal: (showModal: boolean) => void;
  changeForm: (name: string, value: string) => void;
  closeForm: () => void;
  getUser: (user: Interfaces.Models.IUser) => void;
}

export const MainContext = createContext<MainContextProps>({} as MainContextProps);