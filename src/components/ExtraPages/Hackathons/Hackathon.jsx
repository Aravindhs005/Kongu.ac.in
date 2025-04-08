import React, { useEffect, useState } from 'react';
import './Hackathon.css';
import eventData from '../../../assets/docs/Knowafest/details.json';
import Footer from '../../HomePage/Footer/Footer';
import ScrollToTopButton from '../../ScrollToTopButton';
import Section from '../../HomePage/Section/Section';
import Navbar from '../../HomePage/navbar/Navbar';

const Hackathon = () => {
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState('name');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    setEvents(eventData);
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filteredEvents = events
    .filter((event) =>
      Object.values(event).some((val) =>
        String(val).toLowerCase().includes(searchTerm.toLowerCase())
      )
    )
    .sort((a, b) => {
      const aField = a[sortField]?.toLowerCase?.() || '';
      const bField = b[sortField]?.toLowerCase?.() || '';
      return aField.localeCompare(bField);
    });

  return (
    <>
    <Section/>
    <Navbar/>
    <div className="hackathon-container">
      <h1 className="hackathon-title">Hackathons & Events</h1>

      <div className="hackathon-controls">
        <input
          type="text"
          placeholder="Search events..."
          className="hackathon-search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="hackathon-sort"
          value={sortField}
          onChange={(e) => setSortField(e.target.value)}
        >
          <option value="name">Sort by Name</option>
          <option value="department">Sort by Department</option>
          <option value="dates">Sort by Date</option>
        </select>
      </div>

      {!isMobile ? (
        <div className="hackathon-table-wrapper">
          <table className="hackathon-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Department</th>
                <th>Venue</th>
                <th>Dates</th>
                <th>Description</th>
                <th>Poster</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              {filteredEvents.map((event, index) => (
                <tr key={index}>
                  <td>{event.name}</td>
                  <td>{event.department}</td>
                  <td>{event.venue}</td>
                  <td>{event.dates}</td>
                  <td>{event.description}</td>
                  <td>
                    {event.poster ? (
                      <img src={event.poster} alt="poster" className="event-poster" />
                    ) : (
                      'N/A'
                    )}
                  </td>
                  <td>
                    {event.link ? (
                      <a href={event.link} target="_blank" rel="noopener noreferrer">
                        View
                      </a>
                    ) : (
                      'N/A'
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="hackathon-cards-wrapper">
          {filteredEvents.map((event, index) => (
            <div className="hackathon-card" key={index}>
              <h3>{event.name}</h3>
              <p><strong>Department:</strong> {event.department}</p>
              <p><strong>Venue:</strong> {event.venue}</p>
              <p><strong>Date:</strong> {event.dates}</p>
              <p><strong>Description:</strong> {event.description}</p>
              {event.poster && <img src={event.poster} alt="poster" className="card-poster" />}
              {event.link && (
                <a href={event.link} target="_blank" rel="noopener noreferrer">
                  View Details
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
    <Footer/>
    <ScrollToTopButton/>
    </>
  );
};

export default Hackathon;
