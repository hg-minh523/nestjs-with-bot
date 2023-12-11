import { Controller, Get, Post, Req, Request } from '@nestjs/common';
import { userService } from './user.service';

@Controller('user')
export class UserControllers {
  constructor(private readonly userService: userService) {}

  @Post()
  async create(@Req() request: Request) {
    return this.userService.create(request)
  }
  @Get()
  findAll(@Req() request: Request): string {
    return 'This action returns all cats';
  }
}
