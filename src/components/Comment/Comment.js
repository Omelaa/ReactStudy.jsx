import {Component} from "react";

class Comment extends Component {
    constructor(props) {
        super(props);
        this.comment = this.props.comment;
    }

    render() {
        return (
            <div>
                <h3>{this.comment.id}. {this.comment.name}</h3>
            </div>
        );
    }
}

export {Comment};