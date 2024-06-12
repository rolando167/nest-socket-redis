import { Injectable } from "@nestjs/common";
import * as MOCKED_USERS from '../../mocks/data/users.json';
import { sleep } from "src/utils/sleep";

@Injectable()
export class TaskService {

    async getTasks() {
        const allTasks: any[] = MOCKED_USERS;

        await sleep(3000)
        return allTasks;
    }
}