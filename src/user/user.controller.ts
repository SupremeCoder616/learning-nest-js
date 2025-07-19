import { Controller, Get } from '@nestjs/common';

@Controller('user') // Decorator
export class UserController {
  @Get()
  getUser() {
    return [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
    ];
  }
}
