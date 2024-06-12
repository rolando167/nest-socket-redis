import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('User')
export class UserController {
    constructor(private UserService: UserService) { }

    @Get()
    getUser() {
        return this.UserService.getUser();
    }

    // findOne(@Param('id') id: string):  any {
    @Get(':id')
    getUserbyId(@Param('id') id: string): any {
        return this.UserService.getUserBy(id);
    }

    @Post()
    createUser(@Body() User: any) {
        this.UserService.createUser(User);
    }

    @Put()
    updateUser(@Body() User: any) {
        this.UserService.updateUser(User);
    }

    /**
      * Delete User
      * @param id
      */
    @Delete()
    deleteUser(@Param('id') id: string) {
        this.UserService.deleteUser(id);
    }
}
