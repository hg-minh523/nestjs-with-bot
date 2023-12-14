/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { userService } from 'src/user/user.service';
import { AuthTokenService } from './authToken.service';
import { loginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
@Injectable()
export class authService {
  constructor(
    private readonly authTokenService: AuthTokenService,
    private readonly userService: userService,
  ) {}

  async login(loginDto: loginDto) {
    try {
      const user = await this.userService.findOne(loginDto.username);
      const token = await this.authTokenService.createToken(user);
      return {
        accessToken: token,
      };
    } catch (error) {}
  }

  async logout() {
    console.log(123);
  }
  async hashpass(password: string) {
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(password, saltOrRounds);
    return hash;
  }
  async verifyPassword(password: string, hash: string) {
    const isMatch = await bcrypt.compare(password, hash);
    return isMatch;
  }
}
