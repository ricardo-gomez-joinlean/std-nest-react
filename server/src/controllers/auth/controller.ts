import { Body, Controller, Post } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import * as Service from "../../services"
import * as Shared from "../../shared"


const routeName = "auth"

@ApiTags(routeName)
@Controller(routeName)
export class AuthController {

  constructor(
    private readonly userService: Service.User.Service
  ) {}

  @Post()
  @ApiResponse({
    status: 200,
    type: Shared.Dto.Auth.AuthAuthDto
  })
  async auth(
    @Body() dto: Shared.Dto.Auth.AuthAuthDto
  ): Promise<Shared.Responses.Auth.AuthAuthResponse> {
    try {
      const token = await this.userService.auth(dto);

      return {
        token
      }
    } catch (error) {
      console.log(error?.message);
      return error?.message;
    }  
  }
  
}