import {CarForm, Cars} from "./components";

import css from './App.module.css';
import {FC} from "react";

const App: FC = () => {
    return (
        <div className={css.container}>
            <CarForm/>
            <hr/>
            <Cars/>
        </div>
    );
};

export default App;
