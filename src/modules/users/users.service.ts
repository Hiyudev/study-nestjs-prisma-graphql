import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/PrismaService/Prisma.service';
import { UserDTO, UserReturnTypeDTO } from './dto/users.dto';

@Injectable()
export class UsersService {
  constructor(private service: PrismaService) {}

  async create(data: UserDTO): Promise<UserReturnTypeDTO> {
    const userExists = await this.service.user.findFirst({
      where: {
        email: data.email,
      },
      include: {
        institutionAssociated: true,
      },
    });

    if (userExists) {
      throw new Error('User already exists');
    }

    const user = await this.service.user.create({
      data,
      include: {
        institutionAssociated: true,
      },
    });

    return user;
  }

  async getAll(): Promise<UserReturnTypeDTO[]> {
    const nlUsers = await this.service.user.findMany({
      include: {
        institutionAssociated: true,
      },
    });
    return nlUsers;
  }

  async get(id: string): Promise<UserReturnTypeDTO> {
    const user = await this.service.user.findUnique({
      where: {
        id,
      },
      include: {
        institutionAssociated: true,
      },
    });

    return user;
  }

  async update(id: string, data: Partial<UserDTO>): Promise<UserReturnTypeDTO> {
    const user = await this.service.user.update({
      where: {
        id,
      },
      data,
      include: {
        institutionAssociated: true,
      },
    });

    return user;
  }

  async delete(id: string): Promise<UserReturnTypeDTO> {
    const user = await this.service.user.delete({
      where: {
        id,
      },
      include: {
        institutionAssociated: true,
      },
    });

    return user;
  }
}
