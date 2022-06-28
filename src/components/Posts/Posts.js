import {useEffect, useState} from "react";

import styles from './Posts.module.css';

import {postService} from "../../services";
import {Post} from "../Post/Post";

const Posts = ({userId}) => {
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        try {
            postService.getById(userId).then(({data}) => setPosts(data));
        } catch (e) {
            alert('Не вдалося загрузити пости :(')
        }
    }, [userId]);

    return (
        <>
            {userId ?
                <div className={styles.posts}>
                    {posts && posts.map(post => <Post key={post.id} post={post}/>)}
                </div>
                :
                <h3>Виберіть користувача щоб побачити список його постів! :)</h3>
            }
        </>
    );
};

export {Posts};