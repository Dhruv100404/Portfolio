import React, { useState, useEffect } from 'react';
import './App.css'; // Import your main CSS or SCSS file
import Loader from './components/loader'; // Import your Loader component
import Header from './components/header';
import Skills from './components/skills';
import Footer from './components/footer';
import Project from './components/project';
import Contact from './components/contact';

const App = () => {
  
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, [])

  return (
    <div className="App">
      {loading && <Loader />}
      {!loading &&
      <> 
      <Header />
      <Skills />
      <Project />
      <Contact />
      <Footer />
      </>}
    </div>
  );
}

export default App;
