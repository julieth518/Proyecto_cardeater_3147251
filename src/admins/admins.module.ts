import { Module } from '@nestjs/common';
import { AdminsController } from './admins.controller';


@Module({
  imports: [],
  controllers: [AdminsController],
  providers: [],
})
export class AdminsModule {}
