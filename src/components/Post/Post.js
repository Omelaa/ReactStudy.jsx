import {Component} from "react";

class Post extends Component {
    constructor(props) {
        super(props);
        this.post = this.props.post;
    }

    render() {
        return (
            <div>
                <h3>{this.post.id}. {this.post.title}</h3>
            </div>
        );
    }
}

export {Post};