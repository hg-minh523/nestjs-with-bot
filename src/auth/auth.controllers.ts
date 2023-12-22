/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { Public } from 'src/decorator/public.decorator';
import { AuthService } from './auth.service';
import { loginDto } from './dto/login.dto';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  @Public()
  async login( @Res({ passthrough: true }) res: Response,@Body() loginDto: loginDto,
  ) {
    const { accessToken, refreshToken } = await this.authService.login(loginDto);
    res.cookie('refreshToken', refreshToken);
    return accessToken;
  }
  @Get('logout')
  async logout( @Res({ passthrough: true }) res: Response,@Body() loginDto: loginDto,
  ) {
    const { accessToken, refreshToken } = await this.authService.login(loginDto);
    res.cookie('refreshToken', refreshToken);
    return accessToken;
  }
}
