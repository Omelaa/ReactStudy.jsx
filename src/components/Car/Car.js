import {useDispatch} from "react-redux";
import {carActions} from "../../redux";

const Car = ({car, car: {id, model, price, year}}) => {
    const dispatch = useDispatch();

    const getCarId = async (carId) => {
        await dispatch(carActions.deleteCar({id: carId})
        );
    }

    return (
        <div>
            <h4>Name: {model}</h4>
            <div>price: {price}$ | year: {year}</div>
            <button onClick={() => dispatch(carActions.setCarForUpdate(car))}>update</button>
            <button onClick={() => getCarId(id)}>delete</button>
            <hr/>
        </div>
    );
};

export {Car};