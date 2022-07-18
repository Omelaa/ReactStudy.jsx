import {axiosService} from "./axios.service";

import {urls} from "../constants";

class CommentService {
    getAll() {
        return axiosService.get(urls.comments)
    };
}

export {CommentService};