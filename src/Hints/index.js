import React from 'react';
import './hints.css';

export default (props) => {
    return (
        <div className="hints">
            {props.hints.map( hint => <p key={hint.id} className="border-bottom mb-3 text-muted"><a href="">{hint.title.slice(0, 30)}...</a></p>)}
        </div>
    )
}