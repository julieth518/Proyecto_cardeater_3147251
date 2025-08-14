import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AdminsModule } from './admins/admins.module';
import { AppController } from './app.controller';

@Module({
  imports: [AdminsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
