import {FC, ReactNode} from "react";
import {useDispatch} from "react-redux";

import {carActions} from "../../redux";
import {ICar} from "../../interfaces";

interface ICarProps {
    car: ICar;
    children?: ReactNode;
}

const Car: FC<ICarProps> = ({car, car: {id, model, price, year}}) => {
    const dispatch = useDispatch();

    const getCarId = async (carId:number) => {
        await dispatch(carActions.deleteCar(carId));
    };

    return (
        <div>
            <h4>Name: {model}</h4>
            <div>price: {price}$ | year: {year}</div>
            <button onClick={() => dispatch(carActions.setCarForUpdate(car))}>update</button>
            <button onClick={() => getCarId(id!)}>delete</button>
            <hr/>
        </div>
    );
};

export {Car};