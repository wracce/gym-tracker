import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { Session } from 'src/common/models/session.type';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { Response } from 'express';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async login(username: string, pass: string, session: Session): Promise<User> {
    const user = await this.usersService.findOne(username);
    if (!user) throw new UnauthorizedException();

    const isValid = await bcrypt.compareSync(pass, user?.password);
    if (!isValid) throw new UnauthorizedException();

    session.userID = user.id;

    return user;
  }

  async register(createUserDto: CreateUserDto, session: Session): Promise<User> {
    const hashPassword = await bcrypt.hashSync(createUserDto.password, +process.env.SALT_ROUNDS);
    createUserDto.password = hashPassword;

    const user = await this.usersService.create(createUserDto);

    session.userID = user.id;

    return user;
  }

  async logout(session: Session, res: Response): Promise<any> {
    session.destroy((err) => {
      if (err) {
        console.error('Error destroying session:', err);
        res.status(500).send('Error during logout');
      } else {
        res.send('Logout successful');
      }
    });
  }
}
