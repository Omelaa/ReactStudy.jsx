import styles from './App.module.css';

import {PostForm, UserForm} from "./components";

const App = () => {

    return (
        <>
            <h1 className={styles.title}>Home Work 4</h1>
            <h3 className={styles.title}>Create User</h3>
            <div className={styles.container}>
                <UserForm/>
            </div>
            <h3 className={styles.title}>Create Post</h3>
            <div className={styles.container}>
                <PostForm/>
            </div>
        </>
    )
};

export default App;
