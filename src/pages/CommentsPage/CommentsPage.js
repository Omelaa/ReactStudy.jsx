import {useEffect, useState} from "react";

import css from '../../layout/MainLayout/MainLayout.module.css'

import {commentService} from "../../services";
import {Comment} from "../../components";

const CommentsPage = () => {
    const [comments, setAlbums] = useState([]);
    useEffect(() => {
        async function commentsFetch() {
            try {
                const {data} = await commentService.getAll();
                setAlbums(data);
            } catch (e) {
                alert("Не вдалося загрузити comments :(");
            }
        }
        commentsFetch();
    }, []);
    return (
        <div className={css.wrapper}>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {CommentsPage};