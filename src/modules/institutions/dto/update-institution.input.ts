import { PartialType } from '@nestjs/mapped-types';
import { CreateInstitutionInput } from './create-institution.input';

export class UpdateInstitutionInput extends PartialType(CreateInstitutionInput) {
  id: number;
}
