import { Module } from '@nestjs/common';
import { PrismaService } from 'src/services/PrismaService/Prisma.service';
import { InstitutionsResolver } from './institutions.resolver';
import { InstitutionsService } from './institutions.service';

@Module({
  providers: [InstitutionsResolver, InstitutionsService, PrismaService],
})
export class InstitutionsModule {}
