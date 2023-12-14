/* eslint-disable @typescript-eslint/no-unused-vars */
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { createUserDto } from './dto/createUser.dto';
import { updateUserDto } from './dto/updateUser.dto';
import { userService } from './user.service';

@Controller('user')
export class UserControllers {
  constructor(private readonly userService: userService) {}

  @Post('register')
  async create(@Body() createUserDto: createUserDto) {
    return this.userService.create(createUserDto);
  }

  @Post('update')
  async update(@Body() updateUserDto: updateUserDto) {
    return this.userService.update(updateUserDto);
  }
  @Get()
  findAll() {
    return this.userService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.userService.delete(id);
  }
}
