import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  Session,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from './auth.guard';
import { Request } from 'express';
import { Session as TSession } from 'src/common/models/session.type';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { Public } from './decorators/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Public()
  @Post('login')
  async signIn(@Body() loginDto: LoginDto, @Session() session: TSession) {
    return this.authService.login(loginDto.username, loginDto.password, session);
  }

  @HttpCode(HttpStatus.OK)
  @Post('register')
  async register(@Body() createUserDto: CreateUserDto, @Session() session: TSession) {
    return this.authService.register(createUserDto, session);
  }

  @UseGuards(AuthGuard)
  @Get('')
  async test(@Req() request: Request) {
    return `hi ${request.session.userID}`;
  }
}
