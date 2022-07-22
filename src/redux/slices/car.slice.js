import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";


const initialState = {
    cars: [],
    isError: null,
    isLoading: false,
    carForUpdate: null,
};

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await carService.getAll();
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const addNewCar = createAsyncThunk(
    'carSlice/addNewCar',
    async ({car}, {rejectWithValue}) => {
        try {
            const {data} = await carService.createNewCar(car);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const updateNewCar = createAsyncThunk(
    'carSlice/updateNewCar',
    async ({id, car}, {rejectWithValue}) => {
        try {
            const {data} = await carService.updateById(id, car);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const deleteCar = createAsyncThunk(
    'carSlice/deleteCar',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await carService.deleteThisCarById(id);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
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
                const currentCar = state.cars.find(car => car.id === action.payload.id);
                Object.assign(currentCar, action.payload);
                state.carForUpdate = null;
                state.isError = null;
            })
            .addCase(deleteCar.fulfilled, (state, action) => {
                const carForDelete = state.cars.findIndex(car => car.id === action.payload);
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