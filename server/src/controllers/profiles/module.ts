import { Module } from "@nestjs/common";
import * as Service from "../../services"
import { ProfileController } from "./controller"

@Module({
  imports: [
    Service.Profile.ProfileServiceModule
  ],
  controllers: [ProfileController],
  providers: [Service.Profile.ProfileServiceModule]
})
export class ProfileControllerModule {}