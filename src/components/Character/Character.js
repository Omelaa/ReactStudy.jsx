import styles from './Character.module.css';

const Character = ({character: {name, status, species, gender, image}}) => {
    return (
        <div className={styles.wrapper}>
            <img src={image} alt="character"/>
            <div className={styles.info}>Name: {name}</div>
            <div className={styles.info}>Status: {status}</div>
            <div className={styles.info}>Species: {species}</div>
            <div className={styles.info}>Gender: {gender}</div>
        </div>
    );
};

export {Character};