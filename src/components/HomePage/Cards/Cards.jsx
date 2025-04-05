import React from 'react';
import './Cards.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faRankingStar, faStar , faAward , faTowerCell, faNewspaper} from '@fortawesome/free-solid-svg-icons';

const CardData = [
  { logo: <FontAwesomeIcon icon={faBuilding} color='#e06563' />, title: 'Placements'},
  { logo: <FontAwesomeIcon icon={faRankingStar} color='#e06563'/>, title: 'Rankings'},
  { logo: <FontAwesomeIcon icon={faStar} color='#e06563'/>, title: 'Achievements'},
  { logo: <FontAwesomeIcon icon={faAward} color='#e06563'/>, title: 'Awards' },
  { logo: <FontAwesomeIcon icon={faTowerCell} color='#e06563'/>, title: 'Updates'},
  { logo: <FontAwesomeIcon icon={faNewspaper} color='#e06563'/>, title: 'News Clippings'},
];

const Cards = () => {
  return (
    <div className="cards-container">
      {CardData.map((card, index) => (
        <div className="card" key={index}>
          <div className="card-logo">{card.logo}</div>
          <div className="card-title">{card.title}</div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
