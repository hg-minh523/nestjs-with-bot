import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CustomerModule } from './customer/customer.module';
import { UserModule } from './users/users.module';
@Module({
  imports: [UserModule, AuthModule, UserModule, CustomerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
