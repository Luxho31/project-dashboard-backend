import { Transform } from "class-transformer";
import { IsEmail, IsString } from "class-validator";

export class loginDto {
    @IsEmail()
    email: string;

    @Transform(({ value }) => value.trim())
    @IsString()
    password: string;
}