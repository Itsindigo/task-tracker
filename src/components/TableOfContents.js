// src/components/TableOfContents.js
import React from 'react';

const TableOfContents = ({ weeks }) => {
  return (
    <nav style={{ marginBottom: '2rem' }}>
      <h2>Table of Contents</h2>
      <ul>
        {weeks.map((week) => (
          <li key={week.weekNumber}>
            <a href={`#week-${week.weekNumber}`}>Week {week.weekNumber} ({week.start} - {week.end})</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
