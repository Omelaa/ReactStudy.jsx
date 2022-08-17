import { IGenre } from "../interfaces";
import { Show } from "./show.essences";

class Movie extends Show{

    constructor(name: string, genre: IGenre, releaseDate: Date,private duration:number) {
        super(name, genre, releaseDate);
    }

    getDuration(): number {
        return this.duration;
    }
}

export {Movie};