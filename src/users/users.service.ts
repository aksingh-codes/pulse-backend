import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async getUserById(id: string): Promise<User> {
    const user = await this.userModel.findOne({ id }).lean();
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user as User;
  }

  async findOrCreateUser(dto: CreateUserDto): Promise<User> {
    let tempUser = await this.userModel.findById(dto._id);
    if (!tempUser) {
      tempUser = await this.userModel.create({
        _id: dto._id,
        email: dto.email,
        displayName: dto.displayName || dto.email.split('@')[0],
        avatarImg: dto.avatarImg,
      });
    }
    return tempUser as User;
  }

  async updateUser(id: string, dto: UpdateUserDto): Promise<User> {
    const user = await this.userModel.findByIdAndUpdate(id, dto, { new: true });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user as User;
  }
}
