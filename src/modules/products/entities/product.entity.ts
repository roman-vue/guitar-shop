import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column()
    brand:string

    @Column()
    model:string
    
    @Column()
    description:string

    @Column()
    stock:string

    @Column()
    price:string

    @Column()
    image:string
    
}
