import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PageModule } from './page/page.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from "typeorm-naming-strategies";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'nest_tutorial',
      entities: [__dirname + '/**/entity/*.entity{.ts,.js}'],
      synchronize: true,
      logging: true,
      autoLoadEntities: true,
      namingStrategy: new SnakeNamingStrategy()
    }),
    PageModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
