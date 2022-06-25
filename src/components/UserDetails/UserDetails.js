import {useEffect, useState} from "react";

import styles from './UserDetails.module.css';

import {userService} from "../../services";

const UserDetails = ({userId}) => {
    const [userById, setUserById] = useState(null);

    useEffect(() => {
        userService.getById(userId).then(res => res.json()).then(user => setUserById(user));
    }, [userId]);

    return (
        <div>
            {userId ?
                <div className={styles.user}>
                    <span>
                    <b>Username:</b> {userById.username}
                    </span>
                    <span>
                    <b>Email:</b> {userById.email}
                    </span>
                    <span>
                    <b>Phone:</b> {userById.phone}
                    </span>
                    <span>
                    <b>Website:</b> {userById.website}
                    </span>
                </div>
                :
                'Виберіть користувача та дізнайтесь більше про нього :)'
            }
        </div>
    );
};

export {UserDetails};