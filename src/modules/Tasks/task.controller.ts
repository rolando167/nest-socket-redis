import { Controller, Get, HttpStatus, Param, Query, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { TaskService } from './task.service';

@Controller({
    version: '1'
})
export class TaskController {

    constructor(private taskService: TaskService) { }

    @Get('/all')
    getAll(): any {
        // res.status(HttpStatus.OK).json(this.taskService.getTasks());
        return this.taskService.getTasks();
    }

    @Get(":id")
    findOne(@Param('id') id: string) {
        return `This action returns a #${id} 📄`;
    }
}