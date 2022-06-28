import {urls} from "../constants";
import {axiosService} from "./axios.service";

const userService = {
    getAll: () => axiosService(urls.users),
};

export {userService};