import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/PrismaService/Prisma.service';
import { CreateInstitutionInput } from './dto/create-institution.input';
import {
  InstituitionDTO,
  InstitutionReturnTypeDTO,
} from './dto/institutions.dto';
import { UpdateInstitutionInput } from './dto/update-institution.input';

@Injectable()
export class InstitutionsService {
  constructor(private prismaService: PrismaService) {}

  async create(
    createInstitutionInput: CreateInstitutionInput,
  ): Promise<InstituitionDTO> {
    const { name, abreviation } = createInstitutionInput;

    const institutionExist = await this.prismaService.instituition.findFirst({
      where: {
        name,
        abreviation,
      },
    });

    if (institutionExist) {
      throw new Error('Institution already exists');
    }

    const institution = await this.prismaService.instituition.create({
      data: {
        name: createInstitutionInput.name,
        abreviation: createInstitutionInput.abreviation,
      },
    });

    return institution;
  }

  async findAll(): Promise<InstitutionReturnTypeDTO[]> {
    const institutions = await this.prismaService.instituition.findMany();

    return institutions;
  }

  async findOne(id: string): Promise<InstitutionReturnTypeDTO> {
    const institution = await this.prismaService.instituition.findUnique({
      where: {
        id,
      },
    });

    return institution;
  }

  async update(
    id: string,
    updateInstitutionInput: UpdateInstitutionInput,
  ): Promise<InstitutionReturnTypeDTO> {
    const { name, abreviation } = updateInstitutionInput;

    const institution = await this.prismaService.instituition.update({
      where: {
        id,
      },
      data: {
        name,
        abreviation,
      },
    });

    return institution;
  }

  remove(id: string): Promise<InstitutionReturnTypeDTO> {
    const institution = this.prismaService.instituition.delete({
      where: {
        id,
      },
    });
    return institution;
  }
}
