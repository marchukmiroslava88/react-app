import React from 'react';
import { Search } from '../Search';
import Hints from '../Hints';
import data from "../data";

class SearchBar extends React.Component {
    state = {
        hints: []
    }

    handleBlur = (e) => {
        e.target.placeholder = 'search...';
        this.setState({
            hints: []
        });
    }
    handleFocus = (e) => {
        e.target.placeholder = '';
    }
    handleInput = (filterText) => {
        if(!filterText) {
            this.setState({
                hints: []
            });
        } else {
            this.setState({
                hints: data.filter(post => post.title.match(filterText)).slice(0, 10)
            });
        }
    }

    render() {
        const hints = this.state.hints;
        return (
            <>
                <Search onBlur={this.handleBlur} onFocus={this.handleFocus} onInput={this.handleInput} />
                {hints.length > 0 && <Hints hints={hints} /> }
            </>
        )
    }
}
export { SearchBar };