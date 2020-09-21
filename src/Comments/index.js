import React from 'react';

class Comments extends React.Component {
    handleClick = (e) => {
        this.props.onDelete(e.target.id);
    }

    render() {
        return (
            <div className="comments p-4">
                {this.props.comments.map((comment)=>
                    <div key={comment.id} className="border-bottom mb-3">
                        <button type="button" className="close" aria-label="Close">
                            <span aria-hidden="true" id={comment.id} onClick={this.handleClick}>&times;</span>
                        </button>
                        <p className="mb-2"><b>Имя:</b> {comment.nameValue}</p>
                        <p className="mb-2"><b>Комментарий:</b> {comment.commentValue}</p>
                    </div>
                )}
            </div>
        )
    }
}

export { Comments };