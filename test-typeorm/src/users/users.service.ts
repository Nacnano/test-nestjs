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
    // Still bug because the method returns "undefined"
    // const newUser = createUserDto.toUserEntity;
    // console.log("ENTITY " + newUser);
    const newUser = new User();
    newUser.id = createUserDto.id;
    newUser.userId = createUserDto.userId;
    newUser.firstName = createUserDto.firstName;
    newUser.lastName = createUserDto.lastName;
    newUser.isActive = createUserDto.isActive;
    newUser.email = createUserDto.email;
    newUser.password = createUserDto.password;
    newUser.role = createUserDto.role;
    return this.usersRepository.save(newUser);
  }

  async update(id: number, updateData: UserDto): Promise<User> {
    const dataToUpdate = await this.usersRepository.findOneBy({ id });
    for (const key in updateData) {
      dataToUpdate[key] = updateData[key];
    }
    return this.usersRepository.save(dataToUpdate);
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
