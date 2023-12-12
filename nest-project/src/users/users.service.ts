import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
//import { User } from './entities/user.entity'; // Para uso de memoria en variable
import { User, UsersDocument } from './schema/users.schema';
import { Model } from 'mongoose';


@Injectable()
export class UsersService {
  users:Array<User>;

  constructor(@InjectModel(User.name) private usersModel: Model <UsersDocument>) {}

  /* Para uso de memoria en variable
  constructor() {
    this.users = [];
  }
  */

  /* Para uso de memoria en variable
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
  */
  create(createUserDto: CreateUserDto) {
    return this.usersModel.create(createUserDto);
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return `This action find One a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
