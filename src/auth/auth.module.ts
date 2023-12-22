import { Module, forwardRef } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { AuthTokenModule } from 'src/token/token.module';
import { UserModule } from 'src/users/users.module';
import { AuthController } from './auth.controllers';
import { AuthService } from './auth.service';
@Module({
  imports: [forwardRef(() => UserModule), AuthTokenModule, DatabaseModule],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
