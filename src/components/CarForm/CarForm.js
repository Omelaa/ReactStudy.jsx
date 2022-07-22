import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {carActions} from "../../redux";

const CarForm = () => {
    const {register, handleSubmit, setValue, reset} = useForm();
    const {carForUpdate} = useSelector(state => state.cars);
    const dispatch = useDispatch();

    useEffect(() => {
        if (carForUpdate) {
            setValue('model', carForUpdate.model);
            setValue('price', carForUpdate.price);
            setValue('year', carForUpdate.year);
        }
    }, [carForUpdate, setValue]);

    const carSubmit = async (data) => {
        if (carForUpdate) {
            await dispatch(carActions.updateNewCar({id: carForUpdate.id, car: data}));
        } else {
            await dispatch(carActions.addNewCar({car: data}));
        }
        reset();
    };

    return (
        <form onSubmit={handleSubmit(carSubmit)}>
            <input type={"text"} placeholder={'Model'} {...register('model', {required: true})}/>
            <input type={"number"} placeholder={'Price'} {...register('price', {required: true})}/>
            <input type={"number"} placeholder={'Year'} {...register('year', {required: true})}/>
            <button type={"submit"}>{carForUpdate ? 'Update' : 'Create'}</button>
        </form>
    );
};

export {CarForm};