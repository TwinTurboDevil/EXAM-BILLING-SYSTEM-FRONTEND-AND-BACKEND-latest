// SemesterSelection.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SemesterSelection({ onSelectSemester }) {
  const [semesters, setSemesters] = useState([]);
  const [selectedSemester, setSelectedSemester] = useState(null);

  useEffect(() => {
    async function fetchSemesters() {
      const response = await axios.get('http://127.0.0.1:8000/api/semesters/');
      setSemesters(response.data);
    }
    fetchSemesters();
  }, []);

  const handleSemesterSelect = (semester) => {
    setSelectedSemester(semester);
    onSelectSemester(semester);
  };

  return (
    <div>
      <h2>Choose Semester</h2>
      <ul>
        {semesters.map((semester) => (
          <li key={semester.id} onClick={() => handleSemesterSelect(semester)}>
            {semester.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SemesterSelection;
