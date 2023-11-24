import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SuspiciousActivities = () => {
  const [activities, setActivities] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const initialLimit = 25;
  const [displayedActivities, setDisplayedActivities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/activities')
      .then(response => setActivities(response.data))
      .catch(error => console.error('Error fetching suspicious activities:', error));
  }, []);

  useEffect(() => {
    setDisplayedActivities(activities.slice(0, initialLimit));
  }, [activities]);

  const handleShowMore = () => {
    const currentLimit = displayedActivities.length + initialLimit;
    setDisplayedActivities(activities.slice(0, currentLimit));
    setShowMore(true);
  };

  return (
    <div className="bg-gray-100 p-8 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Actividades Sospechosas</h2>
      <ul>
        {displayedActivities.map(activity => (
          <li key={activity.id} className="mb-2">
            Actividad {activity.id} - Usuario {activity.userId}
          </li>
        ))}
      </ul>
      {activities.length > initialLimit && !showMore && (
        <button onClick={handleShowMore} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md">
          Ver Más
        </button>
      )}
    </div>
  );
};

export default SuspiciousActivities;
