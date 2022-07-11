import {Outlet} from 'react-router-dom';

import css from './MainLayout.module.css';
import {Home} from "../../pages";

const MainLayout = () => {
    return (
        <div className={css.container}>
            <Home/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};