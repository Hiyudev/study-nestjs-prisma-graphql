import { Module } from '@nestjs/common';
import { PrismaService } from 'src/services/PrismaService/Prisma.service';
import { InstitutionsController } from './institutions.controller';
import { InstitutionsResolver } from './institutions.resolver';
import { InstitutionsService } from './institutions.service';

@Module({
  controllers: [InstitutionsController],
  providers: [InstitutionsResolver, InstitutionsService, PrismaService],
})
export class InstitutionsModule {}
