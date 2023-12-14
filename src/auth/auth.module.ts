import { Module } from '@nestjs/common';
import { AuthControllers } from './auth.controller';
import { authService } from './auth.service';
import { AuthTokenService } from './authToken.service';

@Module({
  imports: [AuthModule],
  controllers: [AuthControllers],
  providers: [authService, AuthTokenService],
})
export class AuthModule {}
