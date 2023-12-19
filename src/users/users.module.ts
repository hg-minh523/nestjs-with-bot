import { Module, forwardRef } from '@nestjs/common';
import { UserControllers } from './users.controllers';
import { userProviders } from './entity/users.provicders';
import { DatabaseModule } from 'src/database/database.module';
import { AuthModule } from 'src/auth/auth.module';
import { AuthTokenModule } from 'src/token/token.module';
import { UserService } from './users.service';
@Module({
  imports: [forwardRef(() => AuthModule), AuthTokenModule, DatabaseModule],
  controllers: [UserControllers],
  providers: [UserService, ...userProviders],
  exports: [UserService],
})
export class UserModule {}
