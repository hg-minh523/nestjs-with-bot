import {
  BadGatewayException,
  Inject,
  Injectable,
  UnauthorizedException,
  forwardRef,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserService } from '../users/users.service';
import { AuthTokenService } from '../token/token.service';
import { loginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
    private readonly authTokenService: AuthTokenService,
  ) {}
  async login(loginDto: loginDto) {
    try {
      const user = await this.userService.findByUsername(loginDto.username);
      if (!user) {
        throw new UnauthorizedException('Can not find user');
      }
      const isMathPassword = await this.verifyPassword(
        loginDto.password,
        user.password,
      );
      if (!isMathPassword) {
        throw new UnauthorizedException('Wrong password');
      }
      const refreshToken = await this.authTokenService.findByUser(user._id);
      const accessToken = await this.authTokenService.createToken(user);
      return {
        accessToken: accessToken,
        refreshToken: refreshToken,
      };
    } catch (error) {
      throw new BadGatewayException('Unthorization');
    }
  }

  validateUser(username: string) {
    console.log(username);
  }

  async hashpassword(password: string) {
    const saltOrRounds = 10;
    const hash = bcrypt.hash(password, saltOrRounds);
    return hash;
  }

  async verifyPassword(password: string, hash: string) {
    return await bcrypt.compare(password, hash);
  }
}
