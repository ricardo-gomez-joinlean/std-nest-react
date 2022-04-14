import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Profile, ProfileSchema } from "./schema"

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Profile.name, schema: ProfileSchema }
    ])
  ],
  exports: [
    MongooseModule.forFeature([
      { name: Profile.name, schema: ProfileSchema }
    ])
  ],
})
export class ProfileSchemaModule {}