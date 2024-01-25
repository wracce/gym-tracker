import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository, TypeORMError } from 'typeorm';
import { User } from './entities/user.entity';
import { Observable } from 'rxjs';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { email, userName } = createUserDto;

    if (await this.userRepository.findOne({ where: { email } }))
      throw new HttpException('email is already exist', HttpStatus.CONFLICT);

    if (await this.userRepository.findOne({ where: { userName } }))
      throw new HttpException('username is already exist', HttpStatus.CONFLICT);

    return this.userRepository.save(createUserDto);
  }

  async findAll() {
    return this.userRepository.find();
  }

  async findOne(userName: string): Promise<User> {
    return this.userRepository.findOne({ where: { userName } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
