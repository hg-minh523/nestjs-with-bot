import { Module, forwardRef } from '@nestjs/common';

import { AuthController } from './auth.controllers';
import { AuthService } from './auth.service';
import { UserModule } from '../users/users.module';
import { AuthTokenModule } from '../token/token.module';
import { DatabaseModule } from '../database/database.module';
@Module({
  imports: [forwardRef(() => UserModule), AuthTokenModule, DatabaseModule],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
