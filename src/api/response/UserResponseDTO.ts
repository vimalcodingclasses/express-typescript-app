import { Exclude } from 'class-transformer';

export class UserResponseDTO {
    public firstName: string | undefined;

    public lastName: string | undefined;

    public email: string | undefined;

    @Exclude()
    public password: string | undefined;

    public age: number | undefined;
}