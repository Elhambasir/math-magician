import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Layout from './components/Layout';
import Home from './routes/Home';
import NotMatch from './routes/NotMatch';
import Calculator from './routes/Calculator';
import Quote from './routes/Quote';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="Calculator" element={<Calculator />} />
        <Route path="Quote" element={<Quote />} />
      </Route>
      <Route path="*" element={<NotMatch />} />
    </Routes>
  );
}

export default App;
