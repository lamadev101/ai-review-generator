import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerModule } from './customer/customer.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // Replace with your database type
      host: 'localhost',
      port: 5432,
      username: 'user',
      password: 'password',
      database: 'google-review',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UserModule,
    CustomerModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
