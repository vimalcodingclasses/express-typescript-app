import { UserRequestDTO } from '../request/UserRequestDTO';
import { UserResponseDTO } from '../response/UserResponseDTO';
import userRepository from '../repositories/UserRepository';

class UserService {
    public async createUser(body: UserRequestDTO): Promise<UserResponseDTO> {
        try {
            const createdResp = await userRepository.createNewUser(body);
            return createdResp;
        } catch (error: any) {
            throw new Error(error);
        }
    }

    public async getAllUsers(): Promise<UserResponseDTO[]> {
        try {
            const fetchUsersResp = await userRepository.fetchAllUsers();
            return fetchUsersResp;
        } catch (error: any) {
            throw new Error(error);
        }
    }

    public async getUserById(userId: string): Promise<UserResponseDTO | null> {
        try {
            const fetchUserDetailsResp = await userRepository.fetchUserById(userId);
            return fetchUserDetailsResp;
        } catch (error: any) {
            throw new Error(error);
        }
    }

    public async updateUser(userId: string, body: UserRequestDTO): Promise<UserResponseDTO> {
        try {
            const updatedResp = await userRepository.updateUser(userId, body);
            return updatedResp;
        } catch (error: any) {
            throw new Error(error);
        }
    }

    public async deleteUserById(userId: string): Promise<any> {
        try {
            const deletedUserResp = await userRepository.deleteUserById(userId);
            return deletedUserResp;
        } catch (error: any) {
            throw new Error(error);
        }
    }
}

export default new UserService();
