import {Component} from "react";

import {CommentService} from "../../service";
import {Comment} from "../Comment/Comment";

class Comments extends Component {
    state = {comments: []};

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.commentService = new CommentService();
        this.commentService.getAll().then(({data}) => this.setState({comments: data}));
    }

    render() {
        return (
            <div>
                {this.state.comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
            </div>
        );
    }
}

export {Comments};