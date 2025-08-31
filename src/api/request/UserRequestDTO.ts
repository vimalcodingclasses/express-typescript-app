import { IsEmail, IsNotEmpty, IsNumber, MaxLength, MinLength } from 'class-validator';

export class UserRequestDTO {
    @IsNotEmpty({ message: 'firstName should not be empty' })
    public firstName: string | undefined;

    @IsNotEmpty({ message: 'lastName should not be empty' })
    public lastName: string | undefined;

    @IsEmail()
    public email: string | undefined;

    @IsNotEmpty({ message: 'password should not be empty' })
    @MinLength(6)
    @MaxLength(15)
    public password: string | undefined;

    @IsNumber()
    public age: number | undefined;
}