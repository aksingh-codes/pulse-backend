import {
  Body,
  Controller,
  Get,
  Patch,
  Req,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import type { Request } from 'express';
import { JwtAuthGuard } from 'src/auth/jwt/jwt-auth.guard';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get('me')
  async getProfile(@Req() req: Request) {
    const auth0User = req.user; // Auth0 puts user id in sub
    if (!auth0User) {
      throw new UnauthorizedException();
    }
    return this.usersService.findOrCreateUser({
      _id: auth0User.sub,
      email: auth0User.email,
      displayName: auth0User.name,
      avatarImg: auth0User.picture,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Patch('me')
  async updateMe(@Req() req: Request, @Body() updateUserDto: UpdateUserDto) {
    const auth0User = req.user; // Auth0 puts user id in sub
    if (!auth0User) {
      throw new UnauthorizedException();
    }
    return this.usersService.updateUser(auth0User.sub, updateUserDto);
  }
}
