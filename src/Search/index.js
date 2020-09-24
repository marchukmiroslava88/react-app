import React from 'react';
import './search.css';

class Search extends React.Component {
    handleFocus = (e) => {
        this.props.onFocus(e);
    }
    handleBlur = (e) => {
        this.props.onBlur(e);
    }
    handleInput = (e) => {
        this.props.onInput(e.target.value);
    }
    render (){
        return(
            <input className="form-control" type="text" placeholder="search..." onFocus={this.handleFocus} onBlur={this.handleBlur} onInput={this.handleInput}/>
        )
    }
}
export { Search };