import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './Container/Main/Main';
import Layout from './Layout/MainLayout/Layout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Layout>
        <Main/>
      </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
