import * as bcrypt from "bcrypt"
import * as jwt from "jsonwebtoken"
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

    dto.password = bcrypt.hashSync(dto.password, 10);

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

  async auth(dto: Shared.Dto.Auth.AuthAuthDto) {

    const findedUser = await this.userModel.findOne({ email: dto.email });

    if ( !findedUser )
      throw new Error('invalid user');
    
    const isValidPassword = bcrypt.compareSync(dto.password, findedUser.password);
   
    if ( !isValidPassword )
      throw new Error('invalid user');
  
    const token = jwt.sign(
      findedUser._id,
      process.env.PASSWORD_KEY,
      { expiresIn: '7d' }
    );

    return token;

  }
  
}