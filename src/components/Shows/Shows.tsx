import {FC} from "react";

import {Episode, Movie, Series, StreamingService, User} from "../../essences";

import css from './Shows.module.css';

import {genres} from "../../dataBase";

import {ShowItem} from "../ShowItem/ShowItem";

const Shows: FC = () => {
    const episodes = [
        new Episode('First', genres[0], new Date(), 35),
        new Episode('Second', genres[0], new Date(), 55),
        new Episode('Third', genres[0], new Date(), 40)
    ];
    const series = [
        new Series('Main', genres[0], new Date(2015, 6, 25), [...episodes], 25),
        new Series('Omg', genres[0], new Date(2015, 6, 25), [...episodes], 25),
        new Series('time to go', genres[0], new Date(2015, 6, 25), [...episodes], 25)
    ]

    const movies =
        [
            new Movie('Game of thrones', genres[6], new Date(2000, 5, 5), 60),
            new Movie('Mario', genres[4], new Date(2000, 5, 5), 90),
            new Movie('Sonic', genres[2], new Date(2000, 5, 5), 75)
        ];
    const movie = new StreamingService('Movies', [...movies]);
    const episode = new StreamingService('Episodes', [...episodes]);

    const serie = new StreamingService('Series', [...series]);
    const user = new User();
    user.subscribe(movie)
    user.subscribe(episode)
    user.subscribe(serie)

    const SuperMan = new Movie("SuperMan", genres[2], new Date(2000, 5, 6), 5);
    movie.addShow(SuperMan)

    console.log(movie.getMostViewedShowsOfYear(2022));
    console.log(movie.getMostViewedShowsOfGenre(genres[4]));

    return (
        <div>
            <h3>Movies</h3>
            <div className={css.wrapper}>
                {user.subscriptions[0].streamingService.shows.map(show => <ShowItem key={show.name} show={show}/>)}
            </div>
            <h3>Episodes</h3>
            <div className={css.wrapper}>
                {user.subscriptions[1].streamingService.shows.map(show => <ShowItem key={show.name} show={show}/>)}
            </div>
            <h3>Series</h3>
            <div className={css.wrapper}>
                {user.subscriptions[2].streamingService.shows.map(show => <ShowItem key={show.name} show={show}/>)}
            </div>
        </div>
    );
};

export {Shows};