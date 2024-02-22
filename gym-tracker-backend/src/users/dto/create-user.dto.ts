import { User } from '../entities/user.entity';

export type CreateUserDto = Pick<
  User,
  'userName' | 'email' | 'password' | 'firstName' | 'lastName' | 'birthDate' | 'gender'
>;
