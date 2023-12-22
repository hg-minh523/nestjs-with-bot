/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { createUserDto } from './dto/createUser.dto';
import { updateUserDto } from './dto/updateUser.dto';
import { UserService } from './users.service';
import { AuthGuard } from 'src/auth/guard/auth.gaurd';
import { Public } from 'src/decorator/public.decorator';

@Controller('user')
export class UserControllers {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  @Public()
  create(@Body() createUserDto: createUserDto) {
    return this.userService.create(createUserDto);
  }

  @Post('update')
  update(@Body() updateUserDto: updateUserDto) {
    return this.userService.update(updateUserDto);
  }
  @Get(':id')
  @Public()
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.delete(id);
  }
  @Get()
  findAll() {
    return this.userService.findAll();
  }
}
