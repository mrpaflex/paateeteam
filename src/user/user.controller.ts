import { Body, Controller, Post } from '@nestjs/common';
import { UserEntity } from './Entity/user.entity';
import { userDTO } from './dTo/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
constructor(private userService: UserService){}
    @Post('signup')
    async create(@Body() userdto: userDTO ):Promise<UserEntity>{
        return await this.userService.createAccount(userdto)
    }

}
