import { Module } from '@nestjs/common';
import { UserControllers } from './user.controllers';
import { userService } from './user.service';
import { userProviders } from './entity/user.provicders';
@Module({
  imports: [],
  controllers: [UserControllers],
  providers: [userService, ...userProviders],
})
export class UserModule {}
