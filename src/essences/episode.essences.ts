import {Show} from './show.essences';

import {IGenre} from '../interfaces';

class Episode extends Show {

    constructor(name: string, genre: IGenre, releaseDate: Date, private duration: number) {
        super(name, genre, releaseDate);
    };

    getDuration(): number {
        return this.duration;
    };
}

export {Episode};