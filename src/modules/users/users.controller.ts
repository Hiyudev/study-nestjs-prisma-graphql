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
import { UserDTO } from './users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly users: UsersService) {}

  @Get('/')
  async getAll() {
    return this.users.getAll();
  }

  @Get('/:id')
  async getOne(@Param('id') id: string) {
    return this.users.get(id);
  }

  @Patch('/:id')
  @Put('/:id')
  async update(@Param('id') id: string, @Body() data: Partial<UserDTO>) {
    return this.users.update(id, data);
  }

  @Post()
  async create(@Body() data: UserDTO) {
    return this.users.create(data);
  }

  @Delete()
  async delete(@Param('id') id: string) {
    return this.users.delete(id);
  }
}
