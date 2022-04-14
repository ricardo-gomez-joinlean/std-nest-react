import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

import * as Stubs from "../stubs"

const exampleData = Stubs.User.user();

export class UserCreateDto {

  @ApiProperty({ example: exampleData.name })
  @IsString()
  @IsNotEmpty()
  name: string;
  
  @ApiProperty({ example: exampleData.email })
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: exampleData.password })
  @IsString()
  @IsNotEmpty()
  password: string;

}

export class UserUpdateDto {

  @ApiProperty({ example: exampleData.name })
  @IsString()
  @IsNotEmpty()
  name: string;
  
  @ApiProperty({ example: exampleData.email })
  @IsString()
  @IsNotEmpty()
  email: string;


}