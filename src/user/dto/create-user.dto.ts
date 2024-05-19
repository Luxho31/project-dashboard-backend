import { IsDate, IsInt, IsOptional, IsPhoneNumber, IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    firstName: string;
    
    @IsString()
    lastName: string;
    
    @IsString()
    motherName: string;
    
    @IsInt()
    // @IsPhoneNumber('PE')
    phone: number;

    @IsString()
    birthDate: string;

    @IsString()
    email: string;

    @IsString()
    password: string;

    @IsString()
    @IsOptional()
    photo?: string;
}
