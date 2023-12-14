import { ObjectId } from 'typeorm';

export class updateUserDto {
  id?: ObjectId;
  firstName: string;
  lastName: string;
  age: number;
}
