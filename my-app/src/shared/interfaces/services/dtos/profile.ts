import { Models } from "../.."

export interface IProfileSaveDto {
  access: Models.IProfileAccessView[];
}

export interface IProfileSaveAsDto {
  access: Models.IProfileAccessView;
  name: string;
  isActive: boolean;
}