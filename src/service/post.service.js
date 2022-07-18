import {axiosService} from "./axios.service";

import {urls} from "../constants";


class PostService {

    getAll() {
        return axiosService.get(urls.posts);
    };
}

export {PostService};
