import { User } from '../entities/user.entity';

export type CreateUserDto = Pick<
  User,
  'userName' | 'email' | 'password' | 'fistName' | 'lastName' | 'birth_date' | 'gender'
>;
