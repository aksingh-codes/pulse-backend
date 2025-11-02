import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true, unique: true })
  _id: string; // Auth0 sub

  @Prop({ required: true, unique: true })
  email: string;

  // @Prop({ required: true, unique: true })
  // userName: string;

  @Prop()
  displayName: string;

  @Prop()
  bio?: string;

  @Prop()
  avatarImg?: string;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
