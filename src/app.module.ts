import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CustomerModule } from './customer/customer.module';
import { UserModule } from './users/users.module';
import { PermissionModule } from './permision/permission.module';
import { APP_GUARD } from '@nestjs/core/constants';
import { AuthGuard } from './auth/guard/auth.gaurd';
import { RolesGuard } from './auth/guard/roles.gaurd';
@Module({
  imports: [
    UserModule,
    AuthModule,
    UserModule,
    CustomerModule,
    PermissionModule,
  ],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
  controllers: [AppController],
})
export class AppModule {}
