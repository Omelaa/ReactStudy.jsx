import {axiosService} from "./axios.service";
import {urls} from "../constants";


const albumService = {
    getAll: () => axiosService.get(urls.albums)
};

export {albumService};