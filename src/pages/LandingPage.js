import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import ShowStories from '../components/ShowStories';
import Submit from './Submit';

const LandingPage = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ShowStories />} />
        <Route path="/new" element={<ShowStories type={'new'} />} />
        <Route path="/top" element={<ShowStories type={'top'} />} />
        <Route path="/submit" element={<Submit />} />
      </Routes>
    </Router>
  )
}

export default LandingPage