import React from 'react';
import { Header } from './Header';
import Nav from './Nav';
import { Form } from './Form';
import './App.css';

const navList = [
    {
        title: 'Home',
        url: '/'
    },
    {
        title: 'Gallery',
        url: '/'
    },
    {
        title: 'Articles',
        url: '/'
    },
]

function App() {
  return (
    <div className="App">
      <Header>
          <Nav navList={navList} newArticles="7"/>
      </Header>
      <Form />
    </div>
  );
}

export default App;
