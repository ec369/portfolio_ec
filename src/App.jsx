import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="bg-site bg-cover bg-center bg-no-repeat bg-fixed">
      {/* Header Section */}
      <div className="mb-12">
        <Header />
      </div>

      {/* Banner Section */}
      <div className="mb-96">
        <Banner />
      </div>

      {/* Navigation Section */}
      <div className="mb-12">
        <Nav />
      </div>

      {/* About Section */}
      <div className="mb-12">
        <About />
      </div>

      {/* Services Section */}
      {/* <div className="mb-12">
        <Services />
      </div> */}

      {/* Work Section */}
      <div className="mb-12">
        <Work />
      </div>

      {/* Contact Section */}
      <div className="mb-12">
        <Contact />
      </div>

      {/* Spacer for Testing */}
      <div className="h-[4000px]"></div>
    </div>
  );
};

export default App;
