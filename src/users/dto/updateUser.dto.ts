import { ObjectId } from 'typeorm';

export class updateUserDto {
  id?: ObjectId;
  password: string;
  lastname: string;
  firstname: string;
  email: string;
  avatar: string;
  age: number;
}
