import { Module } from "@nestjs/common";
import * as Schemas from "../../schemas"
import { Service } from "./service"

@Module({ 
  imports: [
    Schemas.User.UserSchemaModule,
  ],
  providers: [
    Service
  ],
  exports: [
    Service
  ],
})
export class UserServiceModule {}