import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';

@Injectable()
export class userService {
    constructor(
        @Inject('USER_REPOSITORY')
        private photoRepository: Repository<User>,
    ) { }

    async create(req: any) {
        try {
            return this.photoRepository.create({});       
        } catch (error) {
            
        }
    }

    delete(): string {
        return 'Hello World!123';
    }

    update(): string {
        return 'Hello World!123';
    }

    async get(): Promise<string> {
        return 'Hello World!123';
    }
}
