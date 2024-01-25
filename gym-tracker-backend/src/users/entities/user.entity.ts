import { Column, Entity } from 'typeorm';
import { Gender } from './gender';
import { BaseEntity } from 'src/common/database/model/base.entity';

@Entity()
export class User extends BaseEntity {
  @Column({ unique: true })
  userName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  fistName: string;

  @Column()
  lastName: string;

  @Column()
  birth_date: string;

  @Column()
  gender: Gender;

  @Column({ default: false })
  isEmailConfirmed: boolean;
}
