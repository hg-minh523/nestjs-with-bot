import { Module, forwardRef } from '@nestjs/common';
import { UserControllers } from './users.controllers';
import { userProviders } from './entity/users.provicders';

import { UserService } from './users.service';
import { AuthModule } from '../auth/auth.module';
import { AuthTokenModule } from '../token/token.module';
import { DatabaseModule } from '../database/database.module';
@Module({
  imports: [forwardRef(() => AuthModule), AuthTokenModule, DatabaseModule],
  controllers: [UserControllers],
  providers: [UserService, ...userProviders],
  exports: [UserService],
})
export class UserModule {}
