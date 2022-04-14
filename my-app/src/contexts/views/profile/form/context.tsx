import { createContext } from "react";
import { Interfaces } from "../../../../shared"

export interface IMainState {
  profile: Interfaces.Models.IProfile;
  isLoading: boolean;
  isNew: boolean;
}

export type MainContextProps = {
  state: IMainState;
  getProfile: (profile: Interfaces.Models.IProfile) => void;
  isLoading: (loading: boolean) => void;
}

export const MainContext = createContext<MainContextProps>({} as MainContextProps);