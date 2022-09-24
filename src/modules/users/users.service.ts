import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { UserDTO } from './users.dto';

@Injectable()
export class UsersService {
  constructor(private service: PrismaService) {}

  async create(data: UserDTO) {
    const userExists = await this.service.user.findFirst({
      where: {
        email: data.email,
      },
    });

    if (userExists) {
      throw new Error('Newsletter user already exists');
    }

    const user = await this.service.user.create({
      data,
    });

    return user;
  }

  async getAll() {
    const nlUsers = await this.service.user.findMany({
      select: {
        username: true,
        email: true,
      },
    });
    return nlUsers;
  }

  async get(id: string) {
    const user = await this.service.user.findUnique({
      where: {
        id,
      },
      select: {
        username: true,
        email: true,
      },
    });

    return user;
  }

  async update(id: string, data: Partial<UserDTO>) {
    const user = await this.service.user.update({
      where: {
        id,
      },
      data,
    });

    return user;
  }

  async delete(id: string) {
    const user = await this.service.user.delete({
      where: {
        id,
      },
    });

    return user;
  }
}
