/* eslint-disable @typescript-eslint/no-unused-vars */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { loginDto } from './dto/login.dto';
import { authService } from './auth.service';
@Controller('auth')
export class AuthControllers {
  constructor(private readonly authService: authService) {}

  @Post('login')
  async create(@Body() loginDto: loginDto) {
    return this.authService.login(loginDto);
  }

  @Get('logout')
  async logout() {
    return this.authService.logout();
  }
}
