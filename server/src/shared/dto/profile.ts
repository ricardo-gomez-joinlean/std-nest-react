import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsBoolean, IsNotEmpty, IsString } from "class-validator";

import * as Stubs from "../stubs"
import * as Schemas from "../../schemas"

const exampleData = Stubs.Profile.profileAdminStub();


class AccessActionDto {

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  label: string;

  @IsNotEmpty()
  @IsBoolean()
  hasAccess: boolean;

}

class AccessViewDto {

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  label: string;

  @IsNotEmpty()
  @IsBoolean()
  hasAccess: boolean;

  @IsNotEmpty()
  @IsArray()
  actions: AccessActionDto[];

}

export class ProfileSaveDto {

  @IsArray()
  @IsNotEmpty()
  @ApiProperty({ example: exampleData.access })
  access: AccessViewDto[];

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: exampleData.name })
  name: string;

}

export class ProfileSaveAsDto {
  
  @IsArray()
  @IsNotEmpty()
  @ApiProperty({ example: exampleData.access })
  access: AccessViewDto[];

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: exampleData.name })
  name: string;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty({ example: exampleData.isActive })
  isActive: boolean;

}