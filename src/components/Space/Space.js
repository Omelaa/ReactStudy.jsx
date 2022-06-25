import styles from './Space.module.css';

const Space = ({space: {flight_number, mission_name, launch_year, links: {mission_patch_small}}}) => {

    return (
        <>
            {launch_year !== '2020' ?
                (<div className={styles.space}>
                    <div className={styles.info}>
                        <b>{flight_number}. Mission Name:</b> {mission_name}.
                    </div>
                    <div className={styles.info}>
                        <b>Launch Year:</b> {launch_year}.
                    </div>
                    {<img
                        src={mission_patch_small ? mission_patch_small : 'https://eduzorro.com/wp-content/uploads/2020/04/blue-big-bird-final-logo.png'}
                        width={50} height={50} alt="emblem"/>}
                </div>)
                :
                ''
            }
        </>
    );
};

export {Space};