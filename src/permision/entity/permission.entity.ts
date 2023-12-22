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
export class Permission extends BaseEntity {
  @ObjectIdColumn()
  _id: ObjectId;

  @PrimaryColumn()
  code: string;

  @Column()
  name: string;

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @DeleteDateColumn()
  deleteAt: Date;
}
