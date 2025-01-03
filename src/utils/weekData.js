// src/utils/weekData.js
export const generateWeekData = () => {
  const startDate = new Date(2024, 11, 30); // Dec 30, 2024
  const weeks = [];

  for (let i = 1; i <= 53; i++) {
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 6);

    weeks.push({
      weekNumber: i,
      start: startDate.toLocaleDateString('en-CA', { month: 'short', day: 'numeric', year: 'numeric' }),
      end: endDate.toLocaleDateString('en-CA', { month: 'short', day: 'numeric', year: 'numeric' }),
    });

    startDate.setDate(startDate.getDate() + 7);
  }
  return weeks;
};
