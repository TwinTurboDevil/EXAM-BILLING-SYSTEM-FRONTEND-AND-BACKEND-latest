import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EvaluationForm = () => {
    const [semesters, setSemesters] = useState([]);
    const [courses, setCourses] = useState([]);
    const [selectedSemester, setSelectedSemester] = useState('');
    const [selectedCourse, setSelectedCourse] = useState('');

    useEffect(() => {
        // Fetch semesters on component mount
        axios.get('http://127.0.0.1:8000/api/semesters/')
            .then(response => {
                setSemesters(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the semesters!', error);
            });
    }, []);

    const handleSemesterChange = (event) => {
        const semesterId = event.target.value;
        setSelectedSemester(semesterId);
        setCourses([]);

        if (semesterId) {
            // Fetch courses for the selected semester
            axios.get(`http://127.0.0.1:8000/api/semesters/${semesterId}/courses/`)
                .then(response => {
                    setCourses(response.data);
                })
                .catch(error => {
                    console.error('There was an error fetching the courses!', error);
                });
        }
    };

    const handleCourseChange = (event) => {
        setSelectedCourse(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log('Selected Semester:', selectedSemester);
        console.log('Selected Course:', selectedCourse);
        // Add additional logic to handle other input fields
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="semester">Semester:</label>
            <select id="semester" value={selectedSemester} onChange={handleSemesterChange}>
                <option value="">Select Semester</option>
                {semesters.map(semester => (
                    <option key={semester.id} value={semester.id}>{semester.name}</option>
                ))}
            </select>

            <label htmlFor="course">Course:</label>
            <select id="course" value={selectedCourse} onChange={handleCourseChange}>
                <option value="">Select Course</option>
                {courses.map(course => (
                    <option key={course.id} value={course.id}>{course.name}</option>
                ))}
            </select>

            {/* Additional input fields for question moderation */}

            <button type="submit">Submit</button>
        </form>
    );
};
