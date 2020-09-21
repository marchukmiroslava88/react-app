import React from 'react';
import './form.css';

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
                nameValue: name,
                commentValue: comment
            }]
        }));
        event.target.reset();
    }

    render() {
        return (
            <>
                {this.state.comments.length ?
                <div className="comments">
                    {this.state.comments.map((comment, index)=>
                        <div key={index}>
                            <div><b>Имя:</b> {comment.nameValue}</div>
                            <div><b>Комментарий:</b> {comment.commentValue}</div>
                        </div>
                    )}
                </div> : ''}
                <form className="form" onSubmit={this.handleSubmit}>
                    <label>Имя:</label>
                    <div>
                        <input id="nameValue" type="text" />
                    </div>
                    <label>Комментарий:</label>
                    <div>
                        <textarea id="commentValue" />
                    </div>
                    <button type="submit">Отправить</button>
                </form>
            </>
        );
    }
}

export { Form };