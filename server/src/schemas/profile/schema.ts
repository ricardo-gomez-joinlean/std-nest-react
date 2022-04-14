import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export const schemaName = 'Profile';
export const collectionName = 'profiles';

export type ProfileDocument = Profile & Document;

export class AccessAction {
  
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  label: string;

  @Prop({ required: true, default: true })
  hasAccess: boolean;

}

export class AccessView {
  
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  label: string;

  @Prop({ required: true, default: true })
  hasAccess: boolean;

  @Prop({ required: true })
  actions: AccessAction[];

}

@Schema({ collection: collectionName, timestamps: true })
export class Profile {

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  access?: AccessView[];

  @Prop({ required: true, default: false })
  isActive: boolean;
  
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);