import React from 'react';
import PageUnderDevelopement from '../../../PageUnderDevelopement';
import './IQAC.css';

const IQAC = () => {
  return (
    <div className="ief-wrapper">
      <button
        className="view-old-btn"
        onClick={() => window.open("https://kongu.ac.in/iqac.php", "_blank")}
      >
        Click here to view the old Website
      </button>

      <PageUnderDevelopement />
    </div>
  );
};

export default IQAC;
