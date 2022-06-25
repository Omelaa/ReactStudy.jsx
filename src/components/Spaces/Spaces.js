import {useEffect, useState} from "react";

import styles from './Spaces.module.css';

import {spaceService} from "../../services";
import {Space} from "../Space/Space";

const Spaces = () => {
    const [spaces, setSpaces] = useState([]);

    useEffect(() => {
        try {
            spaceService.getAll().then(res => res.json()).then(value => setSpaces(value));
        } catch (e){
            alert('Щось пішло не так :(');
        }
    }, [])
    console.log(spaces);
    return (
        <div className={styles.spaces}>
            {spaces.map(space => <Space key={space.id} space={space}/>)}
        </div>
    );
};

export {Spaces};