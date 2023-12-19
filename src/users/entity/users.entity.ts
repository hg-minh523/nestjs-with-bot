import {
  Entity,
  Column,
  ObjectId,
  BaseEntity,
  ObjectIdColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  PrimaryColumn,
} from 'typeorm';
@Entity()
export class User extends BaseEntity {
  @ObjectIdColumn()
  _id: ObjectId;

  @PrimaryColumn()
  username: string;

  @Column()
  email: string;

  @Column()
  firstname: string;

  @Column()
  avatar: string;

  @Column()
  lastname: string;

  @Column()
  age: number;

  @Column()
  password: string;

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @DeleteDateColumn()
  deleteAt: Date;
}
