import * as Schemas from "../../schemas"

export const user = (): Schemas.User.User => {
  return {
    name: 'Jose',
    email: 'joseperez@hotmail.com',
    password: '1234567',
    isDeleted: false,
  }
}