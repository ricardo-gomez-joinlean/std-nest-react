import { IGlobalModel } from "./global"


export interface IProfileAccessAction {
  name: string;
  label: string;
  hasAccess: boolean;
}

export interface IProfileAccessView {
  name: string;
  label: string;
  hasAccess: boolean;
  actions: IProfileAccessAction[];
}

export interface IProfile extends IGlobalModel {
  name: string;
  access?: IProfileAccessView[];
  isActive: boolean;
}