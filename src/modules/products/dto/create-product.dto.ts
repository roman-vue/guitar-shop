import { Type } from './../../../../node_modules/yaml/util.d';
import { TypeGuitarEnum } from '../../../utils/enums/type.enum';
import { IsArray, IsIn, IsInt, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";

export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    title:string
    
    @IsNumber()
    @IsOptional()
    price?:number
   
    @IsString()
    @IsNotEmpty()
    description:string
    
    @IsInt()
    @IsPositive()
    @IsOptional()
    stock?:number
    
    @IsString()
    @IsOptional()
    slug?:string

    @IsString()
    @IsNotEmpty()
    type:TypeGuitarEnum
}
