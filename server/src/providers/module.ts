import { Module } from "@nestjs/common"
import { DatabaseModule } from "./db"

@Module({
  imports: [
    DatabaseModule
  ],
})
export class ProvidersModule {}