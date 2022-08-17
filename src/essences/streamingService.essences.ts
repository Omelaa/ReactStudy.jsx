import {Show} from "./show.essences"

import {IGenre} from "../interfaces"

class StreamingService {
    constructor(
        public name: string,
        public shows: Show[],
        public viewsByShowNames: Map<string, number> = new Map<string, number>()
    ) {
    };

    addShow(show: Show): void {
        this.shows.forEach(item => {
            if (item.compare(show)) {
                throw new Error('Таке шоу вже існує!');
            }
        })
        this.shows.push(show);
    };

    getMostViewedShowsOfYear(year: number): Show[] {
        const data = this.shows.filter(show => show.releaseDate.getFullYear() === year && this.viewsByShowNames.has(show.name));
        return this._filterMostViewedGtTen(data);
    };

    getMostViewedShowsOfGenre(genre: IGenre): Show[] {
        const data = this.shows.filter(show => show.genre.id === genre.id && this.viewsByShowNames.has(show.name));
        return this._filterMostViewedGtTen(data);
    };

    private _filterMostViewedGtTen(shows: Show[]): Show[] {
        if (shows.length <= 10) {
            return shows;
        }

        const showNames = shows.map(show => show.name);
        const sortedViews = [...this.viewsByShowNames]
            .filter(show => showNames.includes(show[0]))
            .sort((a, b) => b[1] - a[1])
            .slice(0, 10)
            .map(show => show[0]);

        return shows.filter(show => sortedViews.includes(show.name)).slice(0, 10);
    };
}

export {StreamingService};