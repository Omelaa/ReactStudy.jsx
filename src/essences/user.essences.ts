import {StreamingService} from "./streamingService.essences";
import {Subscription} from "./subscription.essences";

class User {
    constructor(public subscriptions: Subscription[] = []) {
    };

    subscribe(streamingService: StreamingService): Subscription {
        const subscription = new Subscription(streamingService);
        this.subscriptions.push(subscription);
        return subscription;
    };
}

export {User};