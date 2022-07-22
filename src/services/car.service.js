import {axiosService} from "./axios.service";
import {urls} from "../constants";


const carService = {
    getAll: () => axiosService.get(urls.cars),
    updateById: (id, car) => axiosService.put(`${urls.cars}/${id}`, car),
    deleteThisCarById: (id) => axiosService.delete(`${urls.cars}/${id}`),
    createNewCar: (car) => axiosService.post(urls.cars, car)
};

export {carService};
