import { ApiProperty } from "@nestjs/swagger";

export class AuthAuthResponse {
  @ApiProperty({
    example: 'nothing'
  })
  token: string;
}