import {useEffect, useState} from "react";

import styles from './Users.module.css';

import {userService} from "../../services";
import {User} from "../User/User";

const Users = ({getUserById}) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        try {
            userService.getAll().then(res => res.json()).then(items => setUsers(items));
        } catch (e) {
            alert('Щось пішло не так :(');
        }
    }, []);

    return (
        <div className={styles.users}>
            {users.map((user) => <User key={user.id} user={user} getUserById={getUserById}/>)}
        </div>
    );
};

export {Users};