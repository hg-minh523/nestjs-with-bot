import { BadGatewayException, Inject, Injectable } from '@nestjs/common';

import { Token } from './entity/token.entity';
import { ObjectId } from 'mongodb';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
@Injectable()
export class AuthTokenService {
  constructor(
    private readonly jwtService: JwtService,
    @Inject('TOKEN_REPOSITORY')
    private tokenRepository: Repository<Token>,
  ) {}
  async findByUser(userId: any) {
    try {
      return await this.tokenRepository.findOneBy({
        userId: userId,
      });
    } catch (error) {
      throw new BadGatewayException('Can not find one token');
    }
  }

  async findMany(userId: ObjectId) {
    try {
      return await this.tokenRepository.findBy({
        userId: userId,
      });
    } catch (error) {
      throw new BadGatewayException('Can not find all token');
    }
  }

  async delete(userId: ObjectId) {
    try {
      return await this.tokenRepository.delete({
        userId: userId,
      });
    } catch (error) {
      throw new BadGatewayException('Can not delete token');
    }
  }

  async createToken(user: any) {
    try {
      return await this.jwtService.signAsync(JSON.stringify(user));
    } catch (error) {
      throw new BadGatewayException('Can not create token');
    }
  }

  async createRefreshToken(userId: ObjectId) {
    try {
      const token = await this.jwtService.signAsync(JSON.stringify(userId));
      const tokenEntity = new Token();
      tokenEntity.token = token;
      tokenEntity.userId = userId;
      return this.tokenRepository.save(tokenEntity);
    } catch (error) {
      throw new BadGatewayException('Cannot create Refresh token');
    }
  }

  async verifyToken(token: string) {
    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: 'secret',
      });
      return payload;
    } catch (error) {
      throw new BadGatewayException('Can not verify tokena');
    }
  }
}
