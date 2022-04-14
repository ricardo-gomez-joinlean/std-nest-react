import { Module } from "@nestjs/common";
import * as Schemas from "../../schemas"
import { Service } from "./service"

@Module({ 
  imports: [
    Schemas.Profile.ProfileSchemaModule,
  ],
  providers: [
    Service
  ],
  exports: [
    Service
  ],
})
export class ProfileServiceModule {}