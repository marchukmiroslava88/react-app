import React from 'react';
import './nav.css';

export default (props) => {
    const newArticles = props.newArticles;
    console.log(newArticles)
    return (
        <nav className="nav">
            {props.navList.map(item =>
                <li className="nav-item" key={item.title}>
                    <a className="nav-link" href={item.url}>{item.title}</a>

                    {item.title === 'Articles' && newArticles > 0 &&
                        <span className="sticker">{newArticles}</span>
                    }
                </li>
            )}
        </nav>
    )
};