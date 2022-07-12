import {useEffect, useState} from "react";
import {Outlet, useParams} from "react-router-dom";

import {postService} from "../../services";

const PostPage = () => {
    const {id} = useParams();
    console.log(id);

    const [post, setPost] = useState(null);

    useEffect(() => {
        async function postFetch() {
            try {
                const {data} = await postService.getById(id);
                setPost(data);
            } catch (e) {
                alert("Не вдалося загрузити post :(");
            }
        }

        postFetch();
    }, [id]);

    return (
        <div style={{padding: "25px"}}>
            {post &&
                <div>
                    <h3>{post.id}. {post.title}</h3>
                    <hr/>
                    <p>{post.body}</p>
                </div>
            }
        </div>
    );
};

export {PostPage};