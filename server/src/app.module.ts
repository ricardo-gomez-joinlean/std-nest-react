import { Module } from '@nestjs/common';
import { ProvidersModule } from "./providers"
import { ControllersModule } from "./controllers"

@Module({
  imports: [
    ProvidersModule,
    ControllersModule
  ],
})
export class AppModule {}
