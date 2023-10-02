import { base } from "src/base.entity";
import { Column } from "typeorm";

export class UserEntity extends base {
    @Column()
    firstName: string;
    
    @Column()
    lastName: string;

    @Column()
    phoneNumber: number

    @Column()
    email: string

    @Column()
    password: string
}