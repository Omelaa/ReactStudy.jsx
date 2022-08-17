import {FC} from "react";

import css from './ShowItem.module.css';

import {Show} from '../../essences';

interface IProps {
    show: Show;
}

const ShowItem: FC<IProps> = ({show}) => {
    return (
        <div className={css.show}>
            <div>Name: {show.name}</div>
            <div>Genre: {show.genre.name}</div>
            <div>Duration: {show.getDuration()} min.</div>
        </div>
    );
};

export {ShowItem};