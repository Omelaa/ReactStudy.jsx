import {Show} from './show.essences';
import {Episode} from './episode.essences';

import {IGenre} from '../interfaces';


class Series extends Show {

    constructor(name: string, genre: IGenre, releaseDate: Date, public episodes: Episode[],private duration:number) {
        super(name, genre, releaseDate);
    };

    getDuration(): number {
        return this.duration;
    };

}

export {Series};