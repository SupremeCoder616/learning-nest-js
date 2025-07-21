import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
  ];

  getAllUser() {
    return { isError: false, data: this.users };
  }

  getUserById(id: number) {
    const userData = this.users.find((user) => user.id === id);
    return { isError: false, data: userData };
  }
}
