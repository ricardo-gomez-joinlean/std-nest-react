import { Module } from "@nestjs/common";
import { UserControllerModule } from "./users";
import { ProfileControllerModule } from "./profiles";

@Module({
  imports: [
    UserControllerModule,
    ProfileControllerModule
  ]
})
export class ControllersModule {}