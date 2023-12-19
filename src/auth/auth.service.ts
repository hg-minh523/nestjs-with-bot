import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { loginDto } from './dto/login.dto';
import { CustomerService } from 'src/customer/customer.services';
import { UserService } from 'src/users/users.service';

console.log(CustomerService, UserService);
@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
  ) {}
  async login(loginDto: loginDto) {
    // try {
    //   // const user = await this.userService.findByUsername(loginDto.username);
    //   console.log(user);
    //   if (!user) {
    //     throw new UnauthorizedException('Can not find user');
    //   }
    // } catch (error) {
    //   console.log(error);
    //   throw new BadGatewayException('Unthorization');
    // }
  }

  validateUser(username: string) {
    console.log(username);
  }

  async hashpassword(password: string) {
    console.log(password);
    const saltOrRounds = 10;
    const hash = bcrypt.hash(password, saltOrRounds);
    return hash;
  }

  async verifyPassword(password: string, hash: string) {
    return await bcrypt.compare(password, hash);
  }
}
