import {axiosService} from "./axios.service";

import {urls} from "../constants";

const todoService = {
    getAll: () => axiosService.get(urls.todos)
};

export {todoService};