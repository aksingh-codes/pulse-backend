import { Controller, Get, UseGuards } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { JwtAuthGuard } from './auth/jwt/jwt-auth.guard';

@Controller('health')
export class HealthController {
  constructor(@InjectConnection() private readonly connection: Connection) {}

  @UseGuards(JwtAuthGuard)
  @Get('ping')
  ping() {
    const state = this.connection.readyState;
    // 1 = connected, 0 = disconnected, 2 = connecting, 3 = disconnecting
    return { mongoState: state === 1 ? 'connected' : 'not connected' };
  }
}
