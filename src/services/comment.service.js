import {axiosService} from "./axios.service";
import {urls} from "../constants";


const commentService = {
    getAll: () => axiosService.get(urls.comments)
};

export {commentService};