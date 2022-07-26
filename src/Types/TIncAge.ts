

type IUser = {
    name: string;
    age: number;
    status: boolean;
};

let user: IUser = {name: 'Ivan', age: 22, status: true};

function incAge(someUser: IUser, inc: number): IUser {
    someUser.age += inc
    return someUser
}

incAge(user, 2);