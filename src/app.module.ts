import { Module } from '@nestjs/common';
import { ModulesModule } from './modules';
import { RouterModule } from '@nestjs/core';
import { appRoutes } from './app.routes';
import { CacheModule } from '@nestjs/cache-manager';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

@Module({
    imports: [
        ModulesModule,
        RouterModule.register(appRoutes),
        CacheModule.register({
            isGlobal: true,
        })
    ],
    // controllers: [AppController],
    // providers: [AppService],
})
export class AppModule { }
