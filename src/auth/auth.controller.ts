import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { loginDto } from './dto/login.dto';
import { AuthGuard } from './guard/auth.guard';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
    ) {}
    
    @Post('register')
    async register(@Body() registerDto: RegisterDto) {
        return this.authService.register(registerDto);
    }

    @Post('login')
    async login(@Body() loginDto: loginDto) {
        return this.authService.login(loginDto);
    }
    
    // @Post('logout')
    // async logout() {
    //     return 'Logout';
    // }

    @Get('profile')
    @UseGuards(AuthGuard)
    async profile(@Request() req: Request){
        return req.user;
    }
}
