import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateInstitutionInput } from './dto/create-institution.input';
import { UpdateInstitutionInput } from './dto/update-institution.input';
import { InstitutionsService } from './institutions.service';

@Resolver('Institution')
export class InstitutionsResolver {
  constructor(private readonly institutionsService: InstitutionsService) {}

  @Mutation('createInstitution')
  async create(
    @Args('createInstitutionInput')
    createInstitutionInput: CreateInstitutionInput,
  ) {
    return this.institutionsService.create(createInstitutionInput);
  }

  @Query('institutions')
  async findAll() {
    return this.institutionsService.findAll();
  }

  @Query('institution')
  async findOne(@Args('id') id: string) {
    return this.institutionsService.findOne(id);
  }

  @Mutation('updateInstitution')
  async update(
    @Args('updateInstitutionInput')
    updateInstitutionInput: UpdateInstitutionInput,
  ) {
    return this.institutionsService.update(
      updateInstitutionInput.id.toString(),
      updateInstitutionInput,
    );
  }

  @Mutation('removeInstitution')
  async remove(@Args('id') id: string) {
    return this.institutionsService.remove(id);
  }
}
