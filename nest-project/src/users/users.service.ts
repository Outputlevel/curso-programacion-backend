import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  users:Array<User>;

  constructor() {
    this.users = [];
  }

  create(createUserDto: CreateUserDto) {
    const newUser:User = {
      id: this.users.length + 1,
      first_name: createUserDto.first_name,
      last_name: createUserDto.last_name,
      email: createUserDto.email,
      password: createUserDto.password
    }
    
    this.users.push(newUser)
    return 'Created user success';
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    const result = this.users.filter(user => user.id === id)
    return result;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
