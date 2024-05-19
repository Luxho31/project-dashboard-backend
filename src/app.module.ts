import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'luis1234',
      database: 'project_nest',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      // autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    RoleModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
