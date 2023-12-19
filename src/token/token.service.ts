import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { Token } from './entity/token.entity';
@Injectable()
export class AuthTokenService {
  constructor(
    private readonly jwtService: JwtService,
    @Inject('TOKEN_REPOSITORY')
    private tokenRepository: Repository<Token>,
  ) {}
  createToken(user: any) {
    return this.jwtService.sign(JSON.stringify(user));
  }

  createRefreshToken(user) {
    const token = this.jwtService.sign(JSON.stringify(user));
    const tokenEntity = new Token();
    tokenEntity.token = token;
    tokenEntity.userId = user._id;
    return this.tokenRepository.save(tokenEntity);
  }

  async verifyToken(token: string) {
    const payload = await this.jwtService.verifyAsync(token, {
      secret: 'secret',
    });
    return payload;
  }
}
