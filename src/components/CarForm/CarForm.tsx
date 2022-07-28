import {FC, useEffect} from "react";
import {SubmitHandler, useForm} from "react-hook-form";

import {ICar} from "../../interfaces";
import {carActions} from "../../redux";
import {useAppDispatch, useAppSelector} from "../../hooks";

const CarForm: FC = () => {
    const {register, handleSubmit, setValue, reset} = useForm<ICar>();
    const {carForUpdate} = useAppSelector(state => state.cars);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (carForUpdate) {
            setValue('model', carForUpdate.model);
            setValue('price', carForUpdate.price);
            setValue('year', carForUpdate.year);
        }
    }, [carForUpdate, setValue]);

    const carSubmit: SubmitHandler<ICar> = async (car) => {
        if (carForUpdate) {
            await dispatch(carActions.updateNewCar({id: carForUpdate.id, ...car}));
        } else {
            await dispatch(carActions.addNewCar(car));
        }
        reset();
    };

    return (
        <form onSubmit={handleSubmit(carSubmit)}>
            <input placeholder={'Model'} {...register('model', {required: true})}/>
            <input placeholder={'Price'} {...register('price', {required: true, valueAsNumber: true})}/>
            <input placeholder={'Year'} {...register('year', {required: true, valueAsNumber: true})}/>
            <input type={"submit"}>{carForUpdate ? 'Update' : 'Create'}</input>
        </form>
    );
};

export {CarForm};