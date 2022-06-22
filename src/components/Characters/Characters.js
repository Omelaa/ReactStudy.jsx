import {useEffect, useState} from "react";

import styles from './Characters.module.css';

import {Character} from "../Character/Character";

const Characters = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character').then((res) => res.json()).then((items) => setCharacters(items.results));
    }, []);

    return (
        <>
            <h1 className={styles.title}>Rick and Morty</h1>
            <div className={styles.wrapper}>
                {characters.map(character => <Character key={character.id} character={character}/>)}
            </div>
        </>
    );
};

export {Characters};