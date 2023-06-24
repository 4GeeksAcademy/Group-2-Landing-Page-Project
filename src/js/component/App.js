import React from 'react';
import Jumbotron from './Jumbotron';

const App = () => {
  return (
    <div>
      <Jumbotron
        title="Welcome to our Landing Page"
        description="This is a fantastic landing page created using React!"
        additionalInfo="Explore our amazing features and sign up today!"
        buttonLink="/signup"
        buttonText="Sign Up"
      />
    </div>
  );
};

export default App;
