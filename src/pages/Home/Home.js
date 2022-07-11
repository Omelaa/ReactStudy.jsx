import {NavLink} from "react-router-dom";

import css from './Home.module.css';

const Home = () => {
    return (
        <div className={css.wrapper}>
            <NavLink className={css.link} to={'/todos'}>Todos</NavLink>
            <NavLink className={css.link} to={'/albums'}>Albums</NavLink>
            <NavLink className={css.link} to={'/comments'}>Comments</NavLink>
        </div>
    );
};

export {Home};