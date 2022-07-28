import {urls} from "../constants";
import {axiosService} from "./axios.service";

import {ICar} from "../interfaces";
import {AxiosRes} from "./axios.service";


const carService = {
    getAll:():AxiosRes<ICar[]> => axiosService.get(urls.cars),
    updateById: (id:number, car:ICar) => axiosService.put(`${urls.cars}/${id}`, car),
    deleteThisCarById: (id:number) => axiosService.delete(`${urls.cars}/${id}`),
    createNewCar: (car:ICar) => axiosService.post(urls.cars, car)
};

export {carService};
