import { IGenre } from "../interfaces";

import { Show } from "./show.essences";
import { StreamingService } from "./streamingService.essences";

class Subscription {
    constructor(public streamingService: StreamingService) {
    };

    watch(showName: string): Show {
        const show = this.streamingService.shows.find(value => value.name === showName);

        if (!show) {
            throw new Error('Show not found!!!')
        }

        this.streamingService.viewsByShowNames.set(show.name, (this.streamingService.viewsByShowNames.get(show.name) || 0) + 1)
        return show
    };

    getRecommendationTrending(): Show {
        const recommendationShows = this.streamingService.getMostViewedShowsOfYear(new Date().getFullYear());
        return this._getRandomShow(recommendationShows);
    };

    getRecommendationByGenre(genre: IGenre): Show {
        const recommendationGenre = this.streamingService.getMostViewedShowsOfGenre(genre);
        return this._getRandomShow(recommendationGenre);
    };

    private _getRandomShow(shows: Show[]): Show {
        return shows[Math.floor(Math.random() * shows.length)];
    };
}

export {Subscription};