import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { updateUserDto } from './dto/updateUser.dto';
import { createUserDto } from './dto/createUser.dto';

import { User } from './entity/user.entity';
import { authService } from 'src/auth/auth.service';

@Injectable()
export class userService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
    private readonly authService: authService,
  ) {}

  async create(createUserDto: createUserDto) {
    try {
      const user = new User();
      user.firstName = createUserDto.firstName;
      user.lastName = createUserDto.lastName;
      user.age = createUserDto.age;
      user.password = await this.authService.hashpass(user.password);
      return this.userRepository.save(user);
    } catch (error) {
      console.log(error);
    }
  }

  async delete(id: string) {
    try {
      return this.userRepository.delete(id);
    } catch (error) {}
  }

  async update(updateUserDto: updateUserDto) {
    try {
      const user = new User();
      user.firstName = updateUserDto.firstName;
      user.lastName = updateUserDto.lastName;
      user.age = updateUserDto.age;
      return this.userRepository.update(updateUserDto.id, updateUserDto);
    } catch (error) {
      console.log(error);
    }
  }

  async findOne(id) {
    try {
      return this.userRepository.findOneBy({ _id: id });
    } catch (error) {}
  }

  async findAll() {
    try {
      return this.userRepository.find();
    } catch (error) {}
  }
}
