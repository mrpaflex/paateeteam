import { Column, Entity } from "typeorm";

@Entity()
export class base {
    @Column()
    id: number

    @Column({type: 'timestamp', default: ()=> 'current_timestamp'})
    createdAt: Date;
}