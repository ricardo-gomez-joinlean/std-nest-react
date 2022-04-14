import { createContext } from "react";
import { Interfaces } from "../../../../shared"

export interface IMainState {
  listItems: Interfaces.Models.IProfile[];
  isLoading: boolean;
}

export type MainContextProps = {
  state: IMainState;
  setList: (profiles: Interfaces.Models.IProfile[]) => void;
  isLoading: (loading: boolean) => void;
}

export const MainContext = createContext<MainContextProps>({} as MainContextProps);