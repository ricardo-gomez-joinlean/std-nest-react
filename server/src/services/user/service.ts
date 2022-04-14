import * as bcrypt from "bcrypt"
import { Model } from "mongoose"
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";

import * as Schemas from "../../schemas"
import * as Shared from "../../shared"

@Injectable()
export class Service {

  constructor(
    @InjectModel(Schemas.User.schemaName)
    private readonly userModel: Model<Schemas.User.User>
  ) {}

  create(dto: Shared.Dto.User.UserCreateDto) {
    return new this.userModel(dto).save();
  }
  
  find() {
    return this.userModel.find();
  }

  findOne(_id: string) {
    return this.userModel.findOne({ _id })
  }

  update(_id: string, dto: Shared.Dto.User.UserUpdateDto) {
    return this.userModel.findOneAndUpdate({ _id }, { ...dto }, { new: true })
  }
  
  deleteOne(_id: string) {
    return this.userModel.findOneAndUpdate({ _id }, { isDeleted: true }, { new: true });
  }
  
}