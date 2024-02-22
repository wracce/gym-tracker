import { Body, Controller, HttpCode, HttpStatus, Post, Session } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
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
    return await this.authService.login(loginDto.username, loginDto.password, session);
  }

  @HttpCode(HttpStatus.OK)
  @Public()
  @Post('register')
  async register(@Body() createUserDto: CreateUserDto, @Session() session: TSession) {
    await this.authService.register(createUserDto, session);
  }
}
