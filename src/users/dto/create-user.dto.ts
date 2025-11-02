import { IsString, IsUrl, Length, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsString()
  _id: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @Length(2, 50)
  displayName?: string;

  @IsUrl()
  avatarImg?: string;
}
