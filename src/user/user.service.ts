import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserEntity } from './Entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { userDTO } from './dTo/user.dto';

@Injectable()
export class UserService {

    constructor( @InjectRepository(UserEntity) private readonly userServiceRepository: Repository<UserEntity> ){}
    async createAccount(userdto: userDTO): Promise<UserEntity>{

        const email = await this.userServiceRepository.findOne({where: {email: userdto.email}});
        if(email){
            throw new HttpException('user with same credential already exist', HttpStatus.UNPROCESSABLE_ENTITY)
        }

        const newUser = await this.userServiceRepository.create(userdto)
        const saveduser = await this.userServiceRepository.save(newUser)
        delete saveduser.password;
        return saveduser;
    }

}
