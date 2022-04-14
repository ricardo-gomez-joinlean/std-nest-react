  import * as Interfaces from "../../../interfaces"


export interface IList {
  users: Interfaces.Models.IUser[];
}

export interface IFindOne {
  user: Interfaces.Models.IUser;
}

export interface ICreate {
  user: Interfaces.Models.IUser;
}

export interface IUpdate {
  user: Interfaces.Models.IUser;
}

export interface IDelete {
  user: Interfaces.Models.IUser;
}