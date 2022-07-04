import {axiosService} from "./axios.service";

import {urls} from "../constants";


const postService = {
    postPost: (post) => axiosService.post(urls.posts, post)
};

export {postService};