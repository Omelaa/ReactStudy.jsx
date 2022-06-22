import styles from './Simpson.module.css';

const Simpson = ({simpson: {name, title, photo}}) => {
    return (
        <div className={styles.wrapper}>
            <img src={photo} alt="simpson" width={100}/>
            <div>{name} - {title}</div>
        </div>
    );
};

export {Simpson};