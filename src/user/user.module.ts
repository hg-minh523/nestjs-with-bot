import { Module } from '@nestjs/common';
import { UserControllers } from './user.controllers';
import { userService } from './user.service';
import { userProviders } from './entity/user.provicders';
import { DatabaseModule } from 'src/database/database.module';
@Module({
  imports: [DatabaseModule],
  controllers: [UserControllers],
  providers: [userService, ...userProviders],
})
export class UserModule {}
