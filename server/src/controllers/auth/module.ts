import { Module } from "@nestjs/common";
import * as Service from "../../services"
import { AuthController } from "./controller";

@Module({
  imports: [
    Service.User.UserServiceModule
  ],
  controllers: [AuthController],
  providers: [Service.User.UserServiceModule]
})
export class AuthControllerModule {}