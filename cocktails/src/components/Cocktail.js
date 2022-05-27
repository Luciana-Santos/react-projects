import React from 'react';
import { Link } from 'react-router-dom';

const Cocktail = ({ id, image, name, info, glass }) => {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={image} alt={name} />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className="btn-primary btn btn-details">
          details
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;
