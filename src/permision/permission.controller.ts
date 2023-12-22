/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller } from '@nestjs/common';
import { PermissionService } from './permission.service';

@Controller('permision')
export class PermissionControllers {
  constructor(private readonly permissionService: PermissionService) {}
}
