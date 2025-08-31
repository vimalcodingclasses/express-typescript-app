import { Entity, ObjectIdColumn, Column, CreateDateColumn, UpdateDateColumn, BeforeInsert, BeforeUpdate } from 'typeorm'
import { ObjectId } from 'mongodb';
import * as bcrypt from 'bcrypt';

@Entity()
export class User {
    @ObjectIdColumn()
    public _id: ObjectId | undefined

    @Column()
    public firstName: string | undefined

    @Column()
    public lastName: string | undefined

    @Column()
    public email: string | undefined

    @Column()
    public password: string | undefined

    @Column()
    public age: number | undefined

    @CreateDateColumn()
    public createdAt: Date | undefined

    @UpdateDateColumn()
    public updatedAt: Date | undefined

    @BeforeInsert()
    @BeforeUpdate()
    public async hashPassword() {
        if (this.password) {
            const saltRounds = 10;
            this.password = await bcrypt.hash(this.password, saltRounds);
        }
    }
}