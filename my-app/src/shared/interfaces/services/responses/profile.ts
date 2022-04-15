import { Models } from "../../"

export interface IProfileSaveResponse {
  profile: Models.IProfile;
}

export interface IProfileSaveAsResponse {
  profile: Models.IProfile;
}

export interface IProfileFindOne {
  profile: Models.IProfile;
}


export interface IProfileFind {
  profiles: Models.IProfile[];
}