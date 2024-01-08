import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { AuthTokenService } from './token.service';
import { tokenProviders } from './entity/token.provider';
import { DatabaseModule } from '../database/database.module';
@Module({
  imports: [
    DatabaseModule,
    JwtModule.register({
      global: true,
      secret: 'secret',
      // signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthTokenService, ...tokenProviders],
  exports: [AuthTokenService],
})
export class AuthTokenModule {}
