import {NavLink} from "react-router-dom";

const Comment = ({comment: {id, postId, name, body}}) => {
    return (
        <>
            <div>
                <h3>{id}. {name}</h3>
                <p>{body}</p>
                <button>
                    <NavLink to={postId.toString()}>get post</NavLink>
                </button>
            </div>
            <hr/>
        </>
    );
};

export {Comment};