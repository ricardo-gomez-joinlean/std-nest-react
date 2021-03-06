import * as mongoose from "mongoose"
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongooseFieldEncryption  from "mongoose-field-encryption"

import { Profile } from "../profile"

export type UserDocument = User & Document;

export const schemaName = 'User';
export const collectionName = 'users';

@Schema({ collection: collectionName, timestamps: true })
export class User {
  
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;
  
  @Prop({ default: true })
  isDeleted: boolean;

}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.plugin(mongooseFieldEncryption.fieldEncryption, { 
  fields: ["password"], 
  secret: process.env.MONGOOSE_KEY_ENCRYPT,
});