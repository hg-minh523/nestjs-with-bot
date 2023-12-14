import {
  Entity,
  Column,
  ObjectId,
  BaseEntity,
  ObjectIdColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
@Entity()
export class RegitserTokenEntity extends BaseEntity {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  token: string;

  @Column()
  exprired: string;

  @Column()
  userId: string;

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @DeleteDateColumn()
  deleteAt: Date;
}
