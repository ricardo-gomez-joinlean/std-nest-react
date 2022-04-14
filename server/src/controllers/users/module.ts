import { Module } from "@nestjs/common";
import * as Service from "../../services"
import { UserController } from "./controller"

@Module({
  imports: [
    Service.User.UserServiceModule
  ],
  controllers: [UserController],
  providers: [Service.User.UserServiceModule]
})
export class UserControllerModule {}