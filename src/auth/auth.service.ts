import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcryptjs from 'bcryptjs';
import { UserService } from 'src/user/user.service';
import { loginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
    ) { }

    async register(registerDto: RegisterDto) {
        const user = await this.userService.findOneByEmail(registerDto.email);
        if (user) throw new BadRequestException('User already exists');
        const storedUser = await this.userService.create({
            ...registerDto,
            password: await bcryptjs.hash(registerDto.password, 10),
        });
        return storedUser;
    }

    async login(loginDto: loginDto) {
        const user = await this.userService.findOneByEmail(loginDto.email);
        if (!user) throw new UnauthorizedException('Invalid email');

        const isValidPassword = await bcryptjs.compare(loginDto.password, user.password);
        if (!isValidPassword) throw new UnauthorizedException('Invalid password');

        const payload = { email: user.email, sub: user.id, role: user.role };
        const token = await this.jwtService.signAsync(payload);

        return {
            access_token: token,
            // token_type: 'Bearer',
            // expires_in: 86400,
            sub: user.id,
            email: user.email,
            role: user.role,
        };
    }

    // async logout() {
    //     return 'Logout';
    // }

    async profile(email: string) {
        return this.userService.findOneByEmail(email);
    }
}
