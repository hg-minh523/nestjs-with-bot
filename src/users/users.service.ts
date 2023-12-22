import {
  BadGatewayException,
  Inject,
  Injectable,
  forwardRef,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { createUserDto } from './dto/createUser.dto';
import { updateUserDto } from './dto/updateUser.dto';

import { AuthService } from 'src/auth/auth.service';
import { User } from './entity/users.entity';
import { ObjectId } from 'mongodb';
import { AuthTokenService } from 'src/token/token.service';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
    private readonly authTokenService: AuthTokenService,
  ) {}

  async create(createUserDto: createUserDto) {
    try {
      const user = new User();
      user.firstname = createUserDto.firstname;
      user.lastname = createUserDto.lastname;
      user.username = createUserDto.username;
      user.avatar = createUserDto.avatar;
      user.email = createUserDto.email;
      user.lastname = createUserDto.lastname;
      user.age = createUserDto.age;
      user.password = await this.authService.hashpassword(
        createUserDto.password,
      );
      user.username = createUserDto.username;
      const newUser = await this.userRepository.save(user);
      const token = this.authTokenService.createRefreshToken(newUser._id);
      if (!token) {
        throw new BadGatewayException('Create token false');
      }
      return newUser;
    } catch (error) {
      throw new BadGatewayException('Create user false');
    }
  }

  async delete(id: string) {
    try {
      const objectId = new ObjectId(id);
      const user = await this.userRepository.findOneBy({ _id: objectId });
      user.deleteAt = new Date();
      return this.userRepository.remove(user);
    } catch (error) {
      throw new BadGatewayException('delete user false');
    }
  }

  async update(updateUserDto: updateUserDto) {
    try {
      const user = new User();
      user.firstname = updateUserDto.firstname;
      user.lastname = updateUserDto.lastname;
      user.avatar = updateUserDto.avatar;
      user.email = updateUserDto.email;
      user.lastname = updateUserDto.lastname;
      user.age = updateUserDto.age;
      user.password = await this.authService.hashpassword(
        updateUserDto.password,
      );
      return this.userRepository.update(updateUserDto.id, user);
    } catch (error) {
      throw new BadGatewayException('update user false');
    }
  }

  async findOne(id: string) {
    try {
      const objectId = new ObjectId(id);
      return this.userRepository.findOneBy({
        _id: objectId,
      });
    } catch (error) {
      throw new BadGatewayException('Can not find user');
    }
  }

  async findByUsername(username: string) {
    try {
      return this.userRepository.findOneBy({
        username: username,
      });
    } catch (error) {
      throw new BadGatewayException('Can not find user');
    }
  }

  async findAll() {
    try {
      return this.userRepository.find();
    } catch (error) {
      throw new BadGatewayException('Can not find all user');
    }
  }
}
