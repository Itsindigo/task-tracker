import React, { useState, useMemo } from "react";
import { generateWeekData } from "./utils/weekData";
import WeekTable from "./components/WeekTable";
import TableOfContents from "./components/TableOfContents";

const App = () => {
  const weeks = generateWeekData();
  const today = new Date();
  const currentWeek = useMemo(() => {
    return (
      weeks.find(
        (w) => new Date(w.start) <= today && today <= new Date(w.end)
      ) ?? weeks[0]
    );
  }, [weeks]);

  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const refresh = () => {
    setRefreshTrigger((prev) => prev + 1);
  };

  return (
    <div style={{ padding: "1rem", width: '100%' }}>
      <h1>2025 Weekly Task Tracker</h1>
      {currentWeek && (
        <>
          <h2>Current Week</h2>
          <WeekTable
            key={`${currentWeek.weekNumber}-${refreshTrigger}`}
            weekNumber={currentWeek.weekNumber}
            start={currentWeek.start}
            end={currentWeek.end}
            refresh={refresh}
          />
        </>
      )}
      <TableOfContents weeks={weeks} />
      {weeks.map((week) => {
        return (
          <WeekTable
            key={week.weekNumber}
            weekNumber={week.weekNumber}
            start={week.start}
            end={week.end}
            refresh={
              week.weekNumber === currentWeek.weekNumber ? refresh : null
            }
            id={`week-${week.weekNumber}`}
          />
        );
      })}
    </div>
  );
};

export default App;
