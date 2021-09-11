import React from 'react';

import './App.css';
import LeftMenu from './components/LeftMenu/LeftMenu';
import Main from './components/Main/Main';
import SideBar from './components/SideBar/SideBar';

function App() {
  return (
    <div className='App'>
      <header className='header'>
        <nav className='nav-menu'>App Navigation</nav>
      </header>
      <SideBar />
      <aside className='sidebar'>Sidebar</aside>
      <LeftMenu />
      <Main />
      <aside className='right-menu'>Right Menu</aside>
    </div>
  );
}

export default App;
