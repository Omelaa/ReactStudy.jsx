import {Simpson} from "../Simpson/Simpson";

import styles from './Simpsons.module.css';

const Simpsons = () => {
    const simpsons = [
        {
            name: "Homer",
            title: "Dad",
            photo: "https://bit.ly/2z2rfVm"
        },

        {
            name: "Marge",
            title: "Mom",
            photo: "https://bit.ly/2Krycoj"
        },

        {
            name: "Bart",
            title: "Menace",
            photo: "https://bit.ly/2lNZrun"
        },

        {
            name: "Lisa",
            title: "Daughter",
            photo: "https://bit.ly/2tXaOEg"
        },

        {
            name: "Maggie",
            title: "Baby",
            photo: "https://bit.ly/2IL7Tnj"
        }
    ];

    return (
        <div className={styles.wrapper}>
            {
                simpsons.map((simpson) => <Simpson key={simpson.name} simpson={simpson}/>)
            }
        </div>
    );
};

export {Simpsons};