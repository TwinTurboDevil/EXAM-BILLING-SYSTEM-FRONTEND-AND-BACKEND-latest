import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EvaluationForm = () => {
  const [formData, setFormData] = useState({
    course: '',
    semester: '',
    course_teacher: '',
    question_formulation: false,
    question_moderation: false,
    question_translation: false,
    project_evaluation: false,
    lab_exam_evaluation: false,
    viva_voce_evaluation: false,
    number_of_tutorial: 0,
    total_tutorial_answerscripts_evaluation: 0,
    total_semester_final_exam_answerscripts_evaluation: 0,
    thesis_evaluation: false,
    thesis_evaluation: 0,
    exam_committee_chairman: false,
    supervisor: false,
  });
  const [semesters, setSemesters] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchSemesters = async () => {
      try {
        const response = await axios.get('/api/semesters/');
        setSemesters(response.data);
      } catch (error) {
        console.error('Error fetching semesters:', error);
      }
    };

    fetchSemesters();
  }, []);

  const handleSemesterChange = async (e) => {
    const semesterId = e.target.value;
    setFormData({ ...formData, semester: semesterId, course: '' });
    try {
      const response = await axios.get(`/api/semesters/${semesterId}/courses/`);
      setCourses(response.data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/save_evaluation/', formData);
      alert('Evaluation saved successfully');
    } catch (error) {
      console.error('Error saving evaluation:', error);
      alert('An error occurred while saving the evaluation');
    }
  };

  return (
    <div>
      <h2>Evaluation Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Select Semester */}
        <div>
          <label htmlFor="semester">Select Semester:</label>
          <select
            id="semester"
            name="semester"
            value={formData.semester}
            onChange={handleSemesterChange}
          >
            <option value="">--Please choose a semester--</option>
            {semesters.map((semester) => (
              <option key={semester.id} value={semester.id}>
                {semester.name}
              </option>
            ))}
          </select>
        </div>

        {/* Select Course */}
        <div>
          <label htmlFor="course">Select Course:</label>
          <select
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
          >
            <option value="">--Please choose a course--</option>
            {courses.map((course) => (
              <option key={course.id} value={course.id}>
                {course.name}
              </option>
            ))}
          </select>
        </div>

        {/* Other Form Fields */}
        {/* Example: Course Teacher */}
        <div>
          <label htmlFor="course_teacher">Course Teacher:</label>
          <input
            type="text"
            id="course_teacher"
            name="course_teacher"
            value={formData.course_teacher}
            onChange={handleChange}
          />
        </div>

        {/* Example: Question Formulation */}
        <div>
          <label>
            Question Formulation:
            <input
              type="checkbox"
              name="question_formulation"
              checked={formData.question_formulation}
              onChange={handleChange}
            />
          </label>
        </div>

        {/* Add other form fields here */}
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EvaluationForm;
