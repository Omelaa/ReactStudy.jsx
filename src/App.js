import {useState} from "react";

import styles from './App.module.css';

import {Posts, Users} from "./components";

const App = () => {
    const [userId, setUserId] = useState('');

    const getUserById = (id) => {
        setUserId(id);
    };

    return (
        <>
            <h1 className={styles.title}>Users Info</h1>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <Users getUserById={getUserById}/>
                    <Posts userId={userId}/>
                </div>
            </div>
        </>
    )
};

export default App;
