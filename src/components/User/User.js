
import styles from './User.module.css';

const User = ({user: {id, name}, getUserById}) => {
    return (
        <h3 className={styles.user} onClick={() => getUserById(id)}>{id}. {name}.</h3>
    );
};

export {User};