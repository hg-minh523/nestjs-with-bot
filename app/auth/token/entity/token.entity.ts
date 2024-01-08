import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ObjectId,
  ObjectIdColumn,
  UpdateDateColumn,
} from 'typeorm';
@Entity()
export class Token extends BaseEntity {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  token: string;

  @ObjectIdColumn()
  userId: ObjectId;

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @DeleteDateColumn()
  deleteAt: Date;
}
