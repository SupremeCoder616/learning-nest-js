import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user') // Decorator
export class UserController {
  constructor(private readonly userService: UserService) {} // Injecting the service
  @Get()
  getUser() {
    return this.userService.getAllUser();
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.userService.getUserById(Number(id));
  }
}
