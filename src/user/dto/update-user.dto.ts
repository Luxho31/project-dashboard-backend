import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsDate, IsInt, IsOptional, IsPhoneNumber, IsPositive, IsString } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
// export class UpdateUserDto {
    @IsString()
    @IsOptional()
    firstName?: string;
    
    @IsString()
    @IsOptional()
    lastName?: string;
    
    @IsString()
    @IsOptional()
    motherName?: string;
    
    @IsInt()
    @IsPositive()
    @IsOptional()
    // @IsPhoneNumber('PE')
    phone?: number;

    @IsString()
    @IsOptional()
    birthDate?: string;

    @IsString()
    @IsOptional()
    email?: string;

    @IsString()
    @IsOptional()
    password?: string;

    @IsString()
    @IsOptional()
    photo?: string;
}
