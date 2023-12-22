import { Module } from '@nestjs/common';
import { PermissionControllers } from './permission.controller';
import { PermissionService } from './permission.service';
@Module({
  controllers: [PermissionControllers],
  providers: [PermissionService],
  exports: [PermissionService],
})
export class PermissionModule {}
