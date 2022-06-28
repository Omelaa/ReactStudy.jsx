import {axiosService} from "./axios.service";
import {urls} from "../constants";


const postService = {
    getById: (id) => axiosService(`${urls.posts}?userId=${id}`)
};

export {postService};