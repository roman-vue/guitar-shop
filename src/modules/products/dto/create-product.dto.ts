import { IsString } from "class-validator"

export class CreateProductDto {
    @IsString()
    brand:string
    @IsString()
    model:string
    @IsString()
    description:string
    @IsString()
    stock:string
    @IsString()
    price:string
    @IsString()
    image:string
}
