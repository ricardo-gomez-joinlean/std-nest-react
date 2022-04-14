import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UserSchema, User } from "./schema"

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema }
    ])
  ],
  exports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema }
    ])
  ]
})
export class UserSchemaModule {}