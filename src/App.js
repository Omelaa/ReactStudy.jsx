import {CarForm, Cars} from "./components";

import css from './App.module.css';

const App = () => {
    return (
        <div className={css.container}>
            <CarForm/>
            <hr/>
            <Cars/>
        </div>
    );
};

export default App;
