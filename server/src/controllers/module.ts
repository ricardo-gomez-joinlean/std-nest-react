import { Module } from "@nestjs/common";
import { UserControllerModule } from "./users";
import { ProfileControllerModule } from "./profiles";
import { AuthControllerModule } from "./auth";

@Module({
  imports: [
    UserControllerModule,
    ProfileControllerModule,
    AuthControllerModule,
  ]
})
export class ControllersModule {}