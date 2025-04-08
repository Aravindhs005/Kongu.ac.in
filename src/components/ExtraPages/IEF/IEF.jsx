import React from 'react';
import PageUnderDevelopement from '../../PageUnderDevelopement';
import './IEF.css';

const IEF = () => {
  return (
    <div className="ief-wrapper">
      <button
        className="view-old-btn"
        onClick={() => window.open("https://kongu.ac.in/ief.php", "_blank")}
      >
        Click here to view the old Website
      </button>

      <PageUnderDevelopement />
    </div>
  );
};

export default IEF;
