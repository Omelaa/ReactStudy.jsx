import {useEffect, useState} from "react";

import css from '../../layout/MainLayout/MainLayout.module.css'

import {commentService} from "../../services";
import {Comment} from "../../components";
import {Outlet, useParams} from "react-router-dom";

const CommentsPage = () => {
    const [comments, setComments] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        async function commentsFetch() {
            try {
                const {data} = await commentService.getAll();
                setComments(data);
            } catch (e) {
                alert("Не вдалося загрузити comments :(");
            }
        }

        commentsFetch();
    }, []);

    return (
        <div style={{display: "flex"}}>
            <div className={css.comments}>
                {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
            </div>
            {id ?
                <Outlet/>
                :
                <h3 style={{padding: '15px'}}>Виберіть коментар щоб побачити його пости</h3>
            }
        </div>
    );
};

export {CommentsPage};