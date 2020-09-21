import React from 'react';
import './form.css';
import { Comments } from '../Comments';
const uniqid = require('uniqid');

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const name = event.target.elements.nameValue.value;
        const comment = event.target.elements.commentValue.value;

        this.setState((state) => ({
            comments: [...state.comments, {
                id: uniqid(),
                nameValue: name,
                commentValue: comment
            }]
        }));
        event.target.reset();
    }

    handleDelete = (deleteCommentId) => {
        const filteredComments = this.state.comments.filter(comment => comment.id !== deleteCommentId)
        this.setState({comments: filteredComments});
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-3">
                    <form className="form" onSubmit={this.handleSubmit}>
                        <label>Имя:</label>
                        <div>
                            <input id="nameValue" type="text" />
                        </div>
                        <label>Комментарий:</label>
                        <div>
                            <textarea id="commentValue" />
                        </div>
                        <button type="submit" className="btn btn-info">Отправить</button>
                    </form>
                </div>
                <div className="col-md-3">
                    {this.state.comments.length ?
                        <Comments comments={this.state.comments} onDelete={this.handleDelete} />
                    : ''}
                </div>
            </div>
        );
    }
}

export { Form };