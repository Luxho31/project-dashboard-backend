import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { jwtConstants } from '../constants/jwt.constant';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private readonly jwtService: JwtService) { }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    // console.log(request.headers.authorization);

    const token = this.extractTokenFromHeader(request);
    if (!token) throw new UnauthorizedException('Token not found'); // return false;

    // if (!this.validateToken(token)) return false;

    try {
      // this.validateToken(token);
      const payload = await this.jwtService.verifyAsync(token, { secret: jwtConstants.JWT_SECRET });
      request.user = payload;
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }

    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }

  // private validateToken(token: string) {
  //   // Implement token validation logic
  //   return true;
  // }
}
