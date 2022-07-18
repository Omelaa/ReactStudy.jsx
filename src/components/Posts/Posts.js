import {Component} from "react";

import {PostService} from "../../service";
import {Post} from "../Post/Post";

class Posts extends Component {
    state = {posts: []};

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.postService = new PostService();
        this.postService.getAll().then(({data}) => this.setState({posts: data}));
    }

    render() {
        return (
            <div>
                {this.state.posts.map(post => <Post key={post.id} post={post}/>)}
            </div>
        );
    }
}

export {Posts};