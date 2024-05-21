import { Transform } from "class-transformer";
import { IsEmail, IsInt, IsString } from "class-validator";

export class RegisterDto {
    // @Transform(({ value }) => value.toLowerCase())
    @Transform(({ value }) => value.trim())
    @IsString()
    firstName: string;
    
    @Transform(({ value }) => value.trim())
    @IsString()
    lastName: string;
    
    @Transform(({ value }) => value.trim())
    @IsString()
    motherName: string;
    
    // @Transform(({ value }) => value.trim())
    @IsInt()
    // @IsPhoneNumber('PE')
    phone: number;

    // @Transform(({ value }) => value.trim())
    @IsString()
    birthDate: string;

    @IsEmail()
    email: string;

    @Transform(({ value }) => value.trim())
    @IsString()
    password: string;
}