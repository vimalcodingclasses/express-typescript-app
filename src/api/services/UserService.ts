import { dataSource } from '../../db/data-source';
import { UserRequestDTO } from '../request/UserRequestDTO';
import { UserResponseDTO } from '../response/UserResponseDTO';
import { UserRepository } from '../repositories/UserRepository';

class UserService {
    private userRepository = new UserRepository(dataSource);

    public async createUser(body: UserRequestDTO): Promise<UserResponseDTO> {
        try {
            const createdResp = await this.userRepository.createNewUser(body);
            return createdResp;
        } catch (error: any) {
            throw new Error(error);
        }
    }

    public async getAllUsers(): Promise<UserResponseDTO[]> {
        try {
            const fetchUsersResp = await this.userRepository.fetchAllUsers();
            return fetchUsersResp;
        } catch (error: any) {
            throw new Error(error);
        }
    }

    public async getUserById(userId: string): Promise<UserResponseDTO | null> {
        try {
            const fetchUserDetailsResp = await this.userRepository.fetchUserById(userId);
            return fetchUserDetailsResp;
        } catch (error: any) {
            throw new Error(error);
        }
    }

    public async updateUser(userId: string, body: UserRequestDTO): Promise<UserResponseDTO> {
        try {
            const updatedResp = await this.userRepository.updateUser(userId, body);
            return updatedResp;
        } catch (error: any) {
            throw new Error(error);
        }
    }

    public async deleteUserById(userId: string): Promise<any> {
        try {
            const deletedUserResp = await this.userRepository.deleteUserById(userId);
            return deletedUserResp;
        } catch (error: any) {
            throw new Error(error);
        }
    }
}

export default new UserService();
