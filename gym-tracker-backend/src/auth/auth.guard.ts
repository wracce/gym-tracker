import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest() as Request;
    const { userID } = request.session;
    const isPublic = this.reflector.get<boolean>('isPublic', context.getHandler());

    if (isPublic) return true;

    if (!userID) {
      throw new UnauthorizedException();
    }

    return true;
  }
}
