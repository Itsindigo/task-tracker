import React, { useEffect, useState } from 'react';
import { saveCheckboxState, getCheckboxStates } from '../utils/storage';

const WeekTable = ({ weekNumber, start, end }) => {
  const [checkboxState, setCheckboxState] = useState({});

  useEffect(() => {
    const fetchCheckboxStates = async () => {
      const savedStates = await getCheckboxStates(weekNumber);
      const stateMap = savedStates.reduce((acc, entry) => {
        acc[`${entry.day}-${entry.activity}`] = entry.isChecked;
        return acc;
      }, {});
      setCheckboxState(stateMap);
    };
    fetchCheckboxStates();
  }, [weekNumber]);

  const handleCheckboxChange = (day, activity) => {
    const key = `${day}-${activity}`;
    const isChecked = !checkboxState[key];

    setCheckboxState((prevState) => ({
      ...prevState,
      [key]: isChecked,
    }));

    saveCheckboxState(weekNumber, day, activity, isChecked);
  };

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const activities = [
    { name: 'Weightlifting', target: '3x per week' },
    { name: 'Cardio', target: '1x per week (30 minutes)' },
    { name: 'Study (Math)', target: '1x per week (60 minutes)' },
  ];

  return (
    <div id={`week-${weekNumber}`} style={{ marginBottom: '2rem' }}>
      <h2>Week {weekNumber} ({start} - {end})</h2>
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>Activity</th>
            <th>Target</th>
            {days.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {activities.map((activity) => (
            <tr key={activity.name}>
              <td>{activity.name}</td>
              <td>{activity.target}</td>
              {days.map((day) => {
                const key = `${day}-${activity.name}`;
                return (
                  <td key={key}>
                    <input
                      type="checkbox"
                      checked={!!checkboxState[key]}
                      onChange={() => handleCheckboxChange(day, activity.name)}
                    />
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WeekTable;
