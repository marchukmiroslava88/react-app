import React from 'react';
import './search.css';

function handleFocus(e) {
    e.target.placeholder = '';
}
function handleBlur(e) {
    e.target.placeholder = 'search...';
}
export default () => <input className="search" type="text" placeholder="search..." onFocus={handleFocus} onBlur={handleBlur} />