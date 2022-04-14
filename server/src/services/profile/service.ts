import * as bcrypt from "bcrypt"
import { Model } from "mongoose"
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";

import * as Schemas from "../../schemas"
import * as Shared from "../../shared"


@Injectable()
export class Service {
 
  constructor(
    @InjectModel(Schemas.Profile.schemaName)
    private readonly profileModel: Model<Schemas.Profile.Profile>
  ) {}

  save(_id: string, dto: Shared.Dto.Profile.ProfileSaveDto) {
    return this.profileModel.findByIdAndUpdate(_id, { ...dto }, { new: true });
  }

  saveAs(dto: Shared.Dto.Profile.ProfileSaveAsDto) {
    return new this.profileModel(dto).save();
  }

  findOne(_id: string) {
    return this.profileModel.findById(_id);
  }

}