import { Injectable } from "@nestjs/common";
import * as MOCKED_USERS  from '../../mocks/data/users.json';

@Injectable()
export class TaskService {
    getTasks(): any[] {
        const allTasks : any[] = MOCKED_USERS
        return allTasks;
    }
}