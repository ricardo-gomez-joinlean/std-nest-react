import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import * as Services from "../../services"
import * as Shared from "../../shared"

const routeName = "users"

@ApiTags(routeName)
@Controller(routeName)
export class UserController {

  constructor(
    private readonly userService: Services.User.Service
  ) {}

  @Post()
  @ApiResponse({
    status: 201,
    type: Shared.Responses.User.UserCreateResponse
  })
  async create(
    @Body() dto: Shared.Dto.User.UserCreateDto
  ): Promise<Shared.Responses.User.UserCreateResponse> {
    try {

      const user = await this.userService.create(dto);

      return {
        user
      }
      
    } catch (error) {
      console.log(error?.message);
      return error?.message;
    }
  }

  @Get()
  @ApiResponse({
    status: 200,
    type: Shared.Responses.User.UserFindResponse
  })
  async find(): Promise<Shared.Responses.User.UserFindResponse> {
    try {

      const users = await this.userService.find();

      return { 
        users
      };
      
    } catch (error) {
      console.log(error?.message);
      return error?.message;
    }
  }

  @Get('/:id')
  @ApiResponse({
    status: 200,
    type: Shared.Responses.User.UserFindOneResponse
  })
  async findOne(
    @Param('id') _id: string
  ): Promise<Shared.Responses.User.UserFindOneResponse> {
    try {

      const user = await this.userService.findOne(_id);

      return {
        user
      };
      
    } catch (error) {
      console.log(error?.message);
      return error?.message;
    }
  }

  @Put('/:id')
  @ApiResponse({
    status: 200,
    type: Shared.Responses.User.UserUpdateResponse
  })
  async updateOne(
    @Param('id') _id: string,
    @Body() dto: Shared.Dto.User.UserUpdateDto
  ): Promise<Shared.Responses.User.UserUpdateResponse> {
    try {

      const user = await this.userService.update(_id, dto);

      return {
        user
      }

    } catch (error) {
      console.log(error?.message);
      return error?.message;
    }
  }

  @Delete('/:id')
  @ApiResponse({
    status: 200,
    type: Shared.Responses.User.UserDeleteResponse
  })
  async deleteOne(
    @Param('id') _id: string
  ): Promise<Shared.Responses.User.UserDeleteResponse> {
    try {

      const user = await this.userService.deleteOne(_id);
      
      return {
        user
      }

    } catch (error) {
      console.log(error?.message);
      return error?.message;
    }
  }

}