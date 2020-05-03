import React, { useState } from 'react';
// simplebar
import 'simplebar/dist/simplebar.min.css';
import './App.css';

// components
import Header from './components/layouts/Header';

import Sidebar from './components/layouts/Sidebar';

function App() {
  const [open, setOpen] = useState(true);
  return (
    <div className='App'>
      <Header />
      <button
        className='material-icons material-icons--outlined toggle-btn'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-label='Toggle navigation'
        onClick={() => setOpen(!open)}
      >
        menu
      </button>
      <section className='container-fluid main-section'>
        <Sidebar toggle={open} />
        <main className='main-area'>content</main>
      </section>
    </div>
  );
}

export default App;
