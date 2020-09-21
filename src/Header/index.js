import React from 'react';
import './header.css';
import Search from '../Search';
import { Time } from '../Time';

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                {this.props.children}
                <div className="d-flex">
                    <Search />
                    <Time />
                </div>
            </header>
        )
    }
}
export { Header };