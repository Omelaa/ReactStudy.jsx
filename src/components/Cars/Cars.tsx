import {FC, useEffect} from "react";

import {Car} from "../Car/Car";
import {carActions} from "../../redux";
import {useAppDispatch, useAppSelector} from "../../hooks";

const Cars:FC = () => {
    const {cars, isLoading} = useAppSelector(state => state.cars);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(carActions.getAll());
    }, [dispatch]);
    console.log(cars);
    return (
        <div>
            {isLoading ?
                <h2>Loading...</h2>
                :
                cars.map(car => <Car key={car.id} car={car}/>)
            }
        </div>
    );
};

export {Cars};