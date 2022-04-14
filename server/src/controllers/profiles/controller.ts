import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import * as Services from "../../services"
import * as Shared from "../../shared"

const routeName = "profiles"

@ApiTags(routeName)
@Controller(routeName)
export class ProfileController {

  constructor(
    private readonly profileService: Services.Profile.Service
  ) {}

  @Put('/:id')
  @ApiResponse({
    status: 201,
    type: Shared.Responses.Profile.ProfileSaveResponse
  })
  async save(
    @Param('id') _id: string,
    @Body() dto: Shared.Dto.Profile.ProfileSaveDto
  ): Promise<Shared.Responses.Profile.ProfileSaveResponse> {
    try {

      const profile = await this.profileService.save(_id, dto);

      return {
        profile
      };
      
    } catch (error) {
      console.log(error?.message);
      return error?.message;
    }
  }

  @Post('/as')
  @ApiResponse({
    status: 201,
    type: Shared.Responses.Profile.ProfileSaveAsResponse
  })
  async saveAs(
    @Body() dto: Shared.Dto.Profile.ProfileSaveAsDto
  ): Promise<Shared.Responses.Profile.ProfileSaveAsResponse> {
    try {

      const profile = await this.profileService.saveAs(dto);
      
      return {
        profile
      };
      
    } catch (error) {
      console.log(error?.message);
      return error?.message;
    }
  }
  
  @Get('/:id')
  @ApiResponse({
    status: 200,
    type: Shared.Responses.Profile.ProfileFindOne
  })
  async findOne(
    @Param('id') _id: string
  ): Promise<Shared.Responses.Profile.ProfileFindOne> {
    try {

      const profile = await this.profileService.findOne(_id);

      return {
        profile
      };
      
    } catch (error) {
      console.log(error?.message);
      return error?.message;
    }
  }

}