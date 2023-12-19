import { Module, forwardRef } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { UserModule } from 'src/users/users.module';
import { CustomerControllers } from './customer.controllers';
import { CustomerService } from './customer.services';
@Module({
  imports: [forwardRef(() => UserModule), DatabaseModule],
  controllers: [CustomerControllers],
  providers: [CustomerService],
  exports: [CustomerService],
})
export class CustomerModule {}
