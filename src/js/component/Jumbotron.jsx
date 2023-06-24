import React from 'react';

const Jumbotron = (props) => {
  return (
    <div className="jumbotron d-flex align-items-center justify-content-center">
      <div className="text-center">
        <h1 className="display-4">{props.title}</h1>
        <p className="lead">{props.description}</p>
        <hr className="my-4" />
        <p>{props.additionalInfo}</p>
        <a className="btn btn-primary btn-lg" href={props.buttonLink} role="button">{props.buttonText}</a>
      </div>
    </div>
  );
};

export default Jumbotron;
