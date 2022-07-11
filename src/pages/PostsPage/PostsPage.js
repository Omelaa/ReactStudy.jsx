import {useEffect, useState} from "react";
import {Outlet, useParams} from "react-router-dom";

import css from '../../layout/MainLayout/MainLayout.module.css'

import {postService} from "../../services";
import {PostPage} from "../PostPage/PostPage";

const PostsPage = () => {
    const {id} = useParams();
    console.log(id);

    const [post, setPost] = useState(null);
    useEffect(() => {
        async function postFetch() {
            try {
                const {data} = await postService.getById();
                setPost(data);
            } catch (e) {
                alert("Не вдалося загрузити post :(");
            }
        }

        postFetch();
    }, []);
    return (
        <div className={css.wrapper}>
            {post && <PostPage key={post.id} post={post}/>}
            <Outlet/>
        </div>
    );
};

export {PostsPage};