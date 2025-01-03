import React from 'react';
import { generateWeekData } from './utils/weekData';
import WeekTable from './components/WeekTable';
import TableOfContents from './components/TableOfContents';

const App = () => {
  const weeks = generateWeekData();

  return (
    <div style={{ padding: '1rem' }}>
      <h1>2025 Weekly Task Tracker</h1>
      <TableOfContents weeks={weeks} />
      {weeks.map((week) => (
        <WeekTable
          key={week.weekNumber}
          weekNumber={week.weekNumber}
          start={week.start}
          end={week.end}
        />
      ))}
    </div>
  );
};

export default App;
