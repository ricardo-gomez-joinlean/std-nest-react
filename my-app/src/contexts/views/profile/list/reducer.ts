import { Interfaces } from "../../../../shared"
import {
  IMainState
} from "./context"

type IActions =
  | { type: "setList", payload: Interfaces.Models.IProfile[] }
  | { type: "setLoading", payload: boolean }

export const reducer = (state: IMainState, action: IActions ): IMainState => {

  switch ( action.type ) {

    case 'setList':

      const payload = action.payload;

      return {
        ...state,
        listItems: payload
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