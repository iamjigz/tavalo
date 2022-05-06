import { CacheModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppGateway } from './app.gateway';
import { UserSessionCache } from './user-session-cache';

@Module({
  imports: [CacheModule.register({
    isGlobal: true
  })],
  controllers: [AppController],
  providers: [AppService, AppGateway, UserSessionCache],
})
export class AppModule { }
