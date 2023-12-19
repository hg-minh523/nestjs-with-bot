/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller } from '@nestjs/common';
import { CustomerService } from './customer.services';
import { UserService } from 'src/users/users.service';
@Controller('customer')
export class CustomerControllers {
  constructor(private readonly customerService: CustomerService) {}
}
