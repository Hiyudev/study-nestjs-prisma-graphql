import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserDTO } from './dto/users.dto';
import { UsersService } from './users.service';

@Resolver('User')
export class UsersResolver {
  constructor(private readonly userService: UsersService) {}

  @Mutation('createUser')
  create(@Args('createUserInput') createUserInput: UserDTO) {
    return this.userService.create(createUserInput);
  }

  @Query('users')
  findAll() {
    return this.userService.getAll();
  }

  @Query('user')
  findOne(@Args('id') id: string) {
    return this.userService.get(id);
  }

  @Mutation('updateUser')
  update(@Args('updateUserInput') updateUserInput: Partial<UserDTO>) {
    return this.userService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation('removeUser')
  remove(@Args('id') id: string) {
    return this.userService.delete(id);
  }
}
