import { Interfaces } from "../../shared"

import axios from "../axios"

export const save = async ( 
  _id: string,
  dto: Interfaces.Service.Dto.Profile.IProfileSaveDto 
) => {
  try {

    const resp = await axios
      .put<Interfaces.Service.Response.Profile.IProfileSaveResponse>(
        'profiles/' + _id, 
        dto
      );

    return resp.data;
    
  } catch (error) {
    console.log(error)
    return false;
  }
}

export const saveAs = async (
  dto: Interfaces.Service.Dto.Profile.IProfileSaveAsDto
) => {
  try {

    const resp = await axios
      .post<Interfaces.Service.Response.Profile.IProfileSaveAsResponse>(
        'profiles',
        dto
      );

    return resp.data;
    
  } catch (error) {
    console.log(error)
    return false;
  }
}

export const findOne = async (
  _id: string
) => {
  try {

    const resp = await axios
      .get<Interfaces.Service.Response.Profile.IProfileFindOne>('profiles' + _id);

    return resp.data;
    
  } catch (error) {
    console.log(error)
    return false;
  }
}