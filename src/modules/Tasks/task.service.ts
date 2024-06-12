import { Inject, Injectable } from "@nestjs/common";
import * as MOCKED_USERS from '../../mocks/data/users.json';
import { sleep } from "src/utils/sleep";
import { CACHE_MANAGER } from "@nestjs/cache-manager";
import { Cache } from "cache-manager";

@Injectable()
export class TaskService {

    constructor(@Inject(CACHE_MANAGER) private cache_manager: Cache){}

    async getTasks() {
        const key = 'user-find-all';
        const userCache = await this.cache_manager.get(key);

        if(userCache){
            return userCache;
        }
        await sleep(3000)
        const allUsers: any[] = MOCKED_USERS;

        await this.cache_manager.set(key, allUsers, 1000 * 10)
        return allUsers;
    }
}