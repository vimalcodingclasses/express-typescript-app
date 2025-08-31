import { Entity, ObjectIdColumn, Column, CreateDateColumn, UpdateDateColumn, BeforeInsert, BeforeUpdate } from 'typeorm'
import { ObjectId } from 'mongodb';
import * as bcrypt from 'bcrypt';

@Entity()
export class User {
    @ObjectIdColumn()
    _id: ObjectId | undefined

    @Column()
    firstName: string | undefined

    @Column()
    lastName: string | undefined

    @Column()
    email: string | undefined

    @Column()
    password: string | undefined

    @Column()
    age: number | undefined

    @CreateDateColumn()
    createdAt: Date | undefined

    @UpdateDateColumn()
    updatedAt: Date | undefined

    @BeforeInsert()
    @BeforeUpdate()
    async hashPassword() {
        if (this.password) {
            const saltRounds = 10;
            this.password = await bcrypt.hash(this.password, saltRounds);
        }
    }
}