import {baseURL, urls} from "../constants";
import {fetchService} from "./fetch.service";

const userService = {
    getAll: () => fetchService(baseURL, urls.users, 'get'),
    getById: (id) => fetchService(baseURL, `${urls.users}/${id}`, 'get')
};

export {userService};