import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './users/users.module';
import { APP_GUARD } from '@nestjs/core/constants';
import { AuthGuard } from './auth/guard/auth.gaurd';
import { RolesGuard } from './auth/guard/roles.gaurd';

@Module({
  imports: [UserModule, AuthModule, UserModule],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AuthorModule {}
