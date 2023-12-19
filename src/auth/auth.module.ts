import { Module, forwardRef } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { DatabaseModule } from 'src/database/database.module';
import { UserModule } from 'src/users/users.module';
import { AuthController } from './auth.controllers';
import { AuthService } from './auth.service';
import { AuthTokenModule } from 'src/token/token.module';
@Module({
  imports: [
    forwardRef(() => UserModule),
    AuthTokenModule,
    DatabaseModule,
    JwtModule.register({
      global: true,
      secret: 'secret',
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
