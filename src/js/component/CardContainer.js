import React from 'react';

const Card = () => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={require('/workspaces/Group-2-Landing-Page-Project/src/img/woman.jpg').default} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  );
};

const CardContainer = () => {
  return (
    <div className="card-container d-flex justify-content-center">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default CardContainer;
