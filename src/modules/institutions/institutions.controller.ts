import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import {
  InstituitionDTO,
  InstitutionReturnTypeDTO,
} from './dto/institutions.dto';
import { UpdateInstitutionInput } from './dto/update-institution.input';
import { InstitutionsService } from './institutions.service';

@Controller('institutions')
export class InstitutionsController {
  constructor(private readonly institutions: InstitutionsService) {}

  @Get('/')
  async getAll(): Promise<InstitutionReturnTypeDTO[]> {
    return this.institutions.findAll();
  }

  @Get('/:id')
  async getOne(@Param('id') id: string): Promise<InstitutionReturnTypeDTO> {
    return this.institutions.findOne(id);
  }

  @Patch('/:id')
  @Put('/:id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateInstitutionInput,
  ): Promise<InstitutionReturnTypeDTO> {
    return this.institutions.update(id, data);
  }

  @Post()
  async create(
    @Body() data: InstituitionDTO,
  ): Promise<InstitutionReturnTypeDTO> {
    return this.institutions.create(data);
  }

  @Delete()
  async delete(@Param('id') id: string): Promise<InstitutionReturnTypeDTO> {
    return this.institutions.remove(id);
  }
}
