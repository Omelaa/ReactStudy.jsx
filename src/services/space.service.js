import {spaceUrl, urls} from "../constants";
import {fetchService} from "./fetch.service";

const spaceService = {
    getAll: () => fetchService(spaceUrl, urls.launches, 'get'),
};

export {spaceService};