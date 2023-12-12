import { Controller, Query, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private config: ConfigService
  ) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    if (!createUserDto.first_name || !createUserDto.last_name || !createUserDto.email || !createUserDto.password) {
      throw new HttpException('Incomplete values', HttpStatus.BAD_REQUEST);
    }

    const payload = await this.usersService.create(createUserDto);
    return { status: 'success', payload };
  }

  @Get()
  async findAll(@Query('limit') limit) {
    //Ejemplo limito la cantidad de usuarios que se muestran
    console.log(this.config.get<string>('PAPA'));
    const users = await this.usersService.findAll();
    return {status: 'success', users}
  }

  @Get(':id')
  findOne(@Param('id') id: string) {

    if(isNaN(+id)) throw new HttpException('Invalid param', HttpStatus.BAD_REQUEST);
    
    const payload = this.usersService.findOne(+id);
    return {status: 'success', payload}
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
