/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { Public } from '../decorator/public.decorator';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { loginDto } from './dto/login.dto';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  @Public()
  async login( @Res({ passthrough: true }) res: Response,@Body() loginDto: loginDto,
  ) {
    const { accessToken, refreshToken } = await this.authService.login(loginDto);
    // res.cookie('refreshToken', refreshToken);
    return accessToken;
  }
  @Get('logout')
  async logout( @Res({ passthrough: true }) res: Response,@Body() loginDto: loginDto,
  ) {
    const { accessToken, refreshToken } = await this.authService.login(loginDto);
    // res.cookie('refreshToken', refreshToken);
    return accessToken;
  }
}
