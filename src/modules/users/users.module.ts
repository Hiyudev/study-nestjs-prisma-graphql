import { Module } from '@nestjs/common';
import { PrismaService } from 'src/services/PrismaService/Prisma.service';
import { UsersController } from './users.controller';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';
@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService, UsersResolver],
})
export class UsersModule {}
