import { Models } from "../.."

export interface IProfileSaveDto {
  access: Models.IProfileAccessView[];
  name: string;
}

export interface IProfileSaveAsDto {
  access: Models.IProfileAccessView[];
  name: string;
  isActive: boolean;
}