import { Interfaces } from "../../../../shared"
import {
  IMainState
} from "./context"

type IActions =
  | { type: "getProfile", payload: Interfaces.Models.IProfile }
  | { type: "setLoading", payload: boolean }

export const reducer = (state: IMainState, action: IActions ): IMainState => {

  switch ( action.type ) {

    case 'getProfile':

      const profile = action.payload;
  
      return {
        ...state,
        isNew: false,
        profile
      }

      break;

    case 'setLoading':

      return {
        ...state,
        isLoading: action.payload
      }

      break;

    default:

      return state;

      break;

  }

}