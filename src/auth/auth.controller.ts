import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Auth } from './decorators/auth.decorator';
import { loginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { Role } from './enums/role.enum';
import { RequestWithUser } from './interfaces/requestWithUser.interface';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
    ) { }

    @Post('register')
    register(@Body() registerDto: RegisterDto) {
        return this.authService.register(registerDto);
    }

    @Post('login')
    login(@Body() loginDto: loginDto) {
        return this.authService.login(loginDto);
    }

    // @Post('logout')
    // async logout() {
    //     return 'Logout';
    // }

    @Get('profile')
    @Auth(Role.User, Role.Admin)
    profile(@Req() req: RequestWithUser) {
        return this.authService.profile(req.user.email);
    }
}
