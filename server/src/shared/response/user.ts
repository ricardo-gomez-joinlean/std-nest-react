import { ApiProperty } from "@nestjs/swagger";
import * as Schemas from "../../schemas"
import * as Stubs from "../stubs"

export class UserCreateResponse {

  @ApiProperty({
    example: { ...Stubs.User.user() } as Schemas.User.User
  })
  user: Schemas.User.User;

}

export class UserFindResponse {

  @ApiProperty({ 
    example: [{ ...Stubs.User.user() }] as Schemas.User.User[] 
  })
  users: Schemas.User.User[];

}

export class UserFindOneResponse {
  
  @ApiProperty({
    example: { ...Stubs.User.user() } as Schemas.User.User
  })
  user: Schemas.User.User;

}

export class UserUpdateResponse {

  @ApiProperty({
    example: { ...Stubs.User.user() } as Schemas.User.User
  })
  user: Schemas.User.User;

}

export class UserDeleteResponse {

  @ApiProperty({
    example: { ...Stubs.User.user() } as Schemas.User.User
  })
  user: Schemas.User.User;

}