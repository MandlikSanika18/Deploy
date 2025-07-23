import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/api/data')
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching data:', err);
        setError('Failed to fetch data');
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="info-text">Loading...</p>;
  if (error) return <p className="error-text">{error}</p>;

  return (
    <div className="container">
      <h1>Data from Server</h1>
      <ul className="data-list">
        {data.map((item, index) => (
          <li key={index} className="data-item">
            <span className="label">Name:</span> {item.name} &nbsp;
            <span className="label">Age:</span> {item.age}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
