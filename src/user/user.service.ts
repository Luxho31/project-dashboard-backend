import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) { }

  // Registrar un nuevo usuario
  async create(createUserDto: CreateUserDto) {
    try {
      const newUser = this.userRepository.create(createUserDto);
      const existUser = await this.userRepository.findOneBy({ email: newUser.email });

      if (existUser) throw new BadRequestException('Email already exists');

      return await this.userRepository.save(newUser);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  
  // Buscar un usuario por email
  async findByEmail(email: string) {
    return await this.userRepository.findOneBy({ email });
  }

  // Listar todos los usuarios
  async findAll() {
    return await this.userRepository.find();
  }

  // Buscar un usuario por id
  async findOne(id: number) {
    return await this.userRepository.findOneBy({ id });
  }

  // Actualizar un usuario por id
  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.userRepository.update(id, updateUserDto);
  }

  // Eliminar un usuario por id
  async remove(id: number) {
    return await this.userRepository.delete(id);
    // return await this.userRepository.softDelete(id);
    // return await this.userRepository.softRemove({id});
  }
}
