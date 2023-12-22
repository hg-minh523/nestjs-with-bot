import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { tokenProviders } from 'src/auth/entity/token.provider';
import { DatabaseModule } from 'src/database/database.module';
import { AuthTokenService } from './token.service';
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
