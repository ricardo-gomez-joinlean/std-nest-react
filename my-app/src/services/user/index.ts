import { Interfaces } from "../../shared"

import axios from "../axios"

export const create = async (dto: Interfaces.Service.Dto.User.IUserDto ) => {
  try {
   
    const resp = await axios
      .post<Interfaces.Service.Response.User.ICreate>('users', dto);

    return resp.data;

  } catch (error) {
    console.log(error)
    return false;
  }
}

export const list = async () => {
  try {
  
    const resp = await axios
      .get<Interfaces.Service.Response.User.IList>('users');

    return resp.data;
  
  } catch (error) {
    console.log(error)
    return false;
  }
}

export const findOne = async (_id: string) => {
  try {

    const resp = await axios
      .get<Interfaces.Service.Response.User.IFindOne>('users/' + _id);

    return resp.data;
    
  } catch (error) {
    console.log(error)
    return false;
  }
}

export const update = async (
  _id: string, 
  dto: Interfaces.Service.Dto.User.IUserDto
) => {
  try {

    const resp = await axios
      .put<Interfaces.Service.Response.User.IUpdate>('users/' + _id, dto);

    return resp.data;
    
  } catch (error) {
    console.log(error)
    return false;
  }
}
