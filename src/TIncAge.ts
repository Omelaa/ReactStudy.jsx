import { IUser } from '../src/Interfaces/IUser';


const user: IUser = {name: 'Ivan', age: 22, gender: 'male'};

function incAge(someUser: IUser, inc: number): IUser {
    someUser.age += inc;
    return someUser;
}

incAge(user, 2);