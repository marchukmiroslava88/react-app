import React from 'react';
import './header.css';
import { SearchBar } from '../SearchBar';
import { Time } from '../Time';


class Header extends React.Component {
    state = {
        hints: []
    }

    render() {
        return (
            <header className="header">
                {this.props.children}
                <div className="d-flex align-items-center">
                    <div>
                        <SearchBar />
                    </div>
                    <Time />
                </div>
            </header>
        )
    }
}
export { Header };