import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {

  User: any[] = [{
    id: '1',
    name: 'A SPA app',
  },
  {
    id: '2',
    name: 'A Nest API',
  }];

  getUser() {
    return this.User;
  }

  getUserBy(id: string) {
    return this.getUser().filter(p => p.id === id);
}

  createUser(User) {
    this.User = [...this.User, {...User}];
  }

  updateUser(User) {
    this.User = this.User.map(p => {
      if (p.id === User.id) {
        return { ...User};
      }
      return p;
    });
  }

  deleteUser(id: string) {
    this.User = this.User.filter(p => p.id !== id);
  }
}

