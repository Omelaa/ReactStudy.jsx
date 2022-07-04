import {useForm} from "react-hook-form";

import styles from './UserFrom.module.css';

import {userService} from "../../services";


const UserForm = () => {
    const {register, handleSubmit, reset} = useForm()

    const submit = async (user) => {
        try {
            await userService.postUser(user);
            reset();
        } catch (e) {
            alert('Не вдалося створити користувача');
        }
    };

    return (
        <div className={styles.users}>
            <form className={styles.form} onSubmit={handleSubmit(submit)}>
                <input type="text" {...register('name', {required: true})} placeholder={'name'}/>
                <input type="text" {...register('username', {required: true})} placeholder={'username'}/>
                <button type="submit">submit</button>
            </form>
        </div>
    );
};

export {UserForm};