import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {carActions} from "../../redux";
import {Car} from "../Car/Car";

const Cars = () => {
    const {cars, isLoading} = useSelector(state => state.cars);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(carActions.getAll());
    }, []);
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