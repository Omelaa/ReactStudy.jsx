import {FC} from 'react';

import css from './App.module.css';

import {Shows} from './components';

const App: FC = () => {

    return (
        <div className={css.container}>
            <h1>Shows</h1>
            <Shows/>
        </div>
    );
};

export {App};
