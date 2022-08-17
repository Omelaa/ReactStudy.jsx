import {IGenre} from '../interfaces';

abstract class Show {

    protected constructor(public name: string, public genre: IGenre, public releaseDate: Date) {
    };

    abstract getDuration(): number;

    compare(another: Show): boolean {
        return this.name === another.name && this.genre === another.genre && this.releaseDate === another.releaseDate;
    };
}

export {Show};