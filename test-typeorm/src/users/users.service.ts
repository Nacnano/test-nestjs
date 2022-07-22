import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { Repository } from "typeorm";
import { UserDto } from "./dto/createUser.dto";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {}

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOne(id: number): Promise<User> {
    return this.usersRepository.findOneBy({ id });
  }

  async create(createUserDto: UserDto) {
    // const newUser = createUserDto.toUserEntity;
    const newUser = new User();
    newUser.id = createUserDto.id;
    newUser.userId = createUserDto.userId;
    newUser.firstName = createUserDto.firstName;
    newUser.lastName = createUserDto.lastName;
    newUser.isActive = createUserDto.isActive;
    newUser.email = createUserDto.email;
    newUser.password = createUserDto.password;
    return this.usersRepository.save(newUser);
  }

  // async update(id: number, updateData: UpdateUserDto) {
  //   const data = await this.usersRepository.findOneBy({ id });
  //   return this.usersRepository.save(updateData);
  // }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
