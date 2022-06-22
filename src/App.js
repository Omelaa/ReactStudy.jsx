import {Characters, Simpsons} from "./components";

import styles from './App.module.css';

const App = () => {
    return (
        <div className={styles.container}>
            <Simpsons/>
            <hr/>
            <Characters/>
        </div>
    );
};

export default App;
