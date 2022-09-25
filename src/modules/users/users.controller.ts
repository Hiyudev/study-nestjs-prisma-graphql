import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put
} from '@nestjs/common';
import { UserDTO, UserReturnTypeDTO } from './dto/users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly users: UsersService) {}

  @Get('/')
  async getAll(): Promise<UserReturnTypeDTO[]> {
    return this.users.getAll();
  }

  @Get('/:id')
  async getOne(@Param('id') id: string): Promise<UserReturnTypeDTO> {
    return this.users.get(id);
  }

  @Patch('/:id')
  @Put('/:id')
  async update(@Param('id') id: string, @Body() data: Partial<UserDTO>): Promise<UserReturnTypeDTO> {
    return this.users.update(id, data);
  }

  @Post()
  async create(@Body() data: UserDTO): Promise<UserReturnTypeDTO> {
    return this.users.create(data);
  }

  @Delete()
  async delete(@Param('id') id: string): Promise<UserReturnTypeDTO> {
    return this.users.delete(id);
  }
}
