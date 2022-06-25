import {useState} from "react";

import styles from './App.module.css';

import {Spaces, UserDetails, Users} from "./components";

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
                    <UserDetails userId={userId}/>
                </div>
            </div>
            <h1 className={styles.title}>SpaceX</h1>
            <div className={styles.container}>
                <Spaces/>
            </div>
        </>
    )
};

export default App;
