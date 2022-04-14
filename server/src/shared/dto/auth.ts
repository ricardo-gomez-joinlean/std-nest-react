import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class AuthAuthDto {
  
  @ApiProperty({
    example: 'anishit@hotmail.com'
  })
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: 'yourfukinmom'
  })
  @IsString()
  @IsNotEmpty()
  password: string;

}