import {useForm} from "react-hook-form";

import styles from './PostFrom.module.css';

import {postService} from "../../services";



const PostForm = () => {
    const {register, handleSubmit, reset} = useForm()

    const submit = async (post) => {
        try {
            await postService.postPost(post);
            reset();
        } catch (e) {
            alert('Не вдалося створити пост');
        }
    };

    return (
        <div className={styles.posts}>
            <form className={styles.form} onSubmit={handleSubmit(submit)}>
                <input type="text" {...register('title', {required: true})} placeholder={'title'}/>
                <input type="text" {...register('body', {required: true})} placeholder={'body'}/>
                <button type="submit">submit</button>
            </form>
        </div>
    );
};

export {PostForm};