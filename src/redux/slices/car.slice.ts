import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ICar} from "../../interfaces";
import {carService} from "../../services";
import {AxiosError} from "axios";

type CarState = {
    cars: ICar[];
    isError?: null | string;
    isLoading?: boolean;
    carForUpdate: null | ICar;
}

const initialState: CarState = {
    cars: [],
    isError: null,
    isLoading: false,
    carForUpdate: null,
};

const getAll = createAsyncThunk<ICar[], void>(
    'carSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await carService.getAll();
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    }
);

const addNewCar = createAsyncThunk(
    'carSlice/addNewCar',
    async (car: ICar, {rejectWithValue}) => {
        try {
            const {data} = await carService.createNewCar(car);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data)
        }
    }
);

const updateNewCar = createAsyncThunk<void, ICar>(
    'carSlice/updateNewCar',
    async ({id, ...car}, {rejectWithValue}) => {
        try {
            const {data} = await carService.updateById(id!, car);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    }
);

const deleteCar = createAsyncThunk<ICar, number>(
    'carSlice/deleteCar',
    async (cardId, {rejectWithValue}) => {
        try {
            const {data} = await carService.deleteThisCarById(cardId);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    }
);

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAll.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAll.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = null;
                state.cars = action.payload;
            })
            .addCase(getAll.rejected, (state, action) => {
                state.isError = action.payload;
            })
            .addCase(updateNewCar.fulfilled, (state, action) => {
                const currentCar = state.cars.find(car => car.id === action.payload);
                Object.assign(currentCar!, action.payload);
                state.carForUpdate = null;
                state.isError = null;
            })
            .addCase(deleteCar.fulfilled, (state, action) => {
                const carForDelete = state.cars.findIndex(car => car.id === +action.payload!);
                state.cars.splice(carForDelete, 1);
                state.isError = null;
            })
            .addCase(addNewCar.fulfilled, (state, action) => {
                state.cars.push(action.payload);
                state.isError = null;
            })
    }
});

const {reducer: carReducer, actions: {setCarForUpdate}} = carSlice;

const carActions = {
    getAll,
    addNewCar,
    setCarForUpdate,
    updateNewCar,
    deleteCar
};

export {carReducer, carActions};