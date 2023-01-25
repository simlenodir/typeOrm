import {Entity, PrimaryGeneratedColumn, Column} from "typeorm"
@Entity()
export class UserEntity{
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({
        type: "char varying",
        length: 64,
        nullable: false
    })
    name: string

    @Column({
        type:"int",
        nullable: false
    })
    age: number
}