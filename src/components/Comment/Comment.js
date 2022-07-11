import {NavLink, useParams} from "react-router-dom";

const Comment = ({comment: {name, email, body}}) => {
    const {id} = useParams();
    console.log(id);
    return (
        <div>
            <h3>{name}</h3>
            <p>{body}</p>
            <NavLink to={`/posts`}>click</NavLink>
        </div>
    );
};

export {Comment};