import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EvaluationForm = () => {
  const [formData, setFormData] = useState({
    course: '',
    semester: '',
    course_teacher: '',
    position: '',
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
    total_thesis_evaluation: 0,
    exam_committee_chairman: false,
    supervisor: false,
  });
  const [semesters, setSemesters] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchSemesters = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/semesters/');
        setSemesters(response.data);
      } catch (error) {
        console.error('Error fetching semesters:', error);
      }
    };

    fetchSemesters();
  }, []);

  const handleSemesterChange = async (e) => {
    const semesterId = e.target.value;
    setFormData({ ...formData, semesterId, courseId: '' });
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/semesters/${semesterId}/courses/`);
      setCourses(response.data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  const handleChange = (e) => {
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post('http://127.0.0.1:8000/api/save_evaluation/', formData);
        console.log(response.data)
        if (response.status === 200) {
            alert('Evaluation saved successfully');
        } else {
            alert('An error occurred while saving the evaluation');
        }
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

        {/* Course Teacher */}
        <div>
          <label htmlFor="courseTeacher">Course Teacher:</label>
          <input
            type="text"
            id="course_teacher"
            name="course_teacher"
            value={formData.course_teacher}
            onChange={handleChange}
          />
        </div>

        {/* Position */}
        <div>
          <label htmlFor="position">Position:</label>
          <input
            type="text"
            id="position"
            name="position"
            value={formData.position}
            onChange={handleChange}
          />
        </div>

        {/* Question Formulation */}
        <div>
          <label>Question Formulation:</label>
          <input
            type="checkbox"
            id="question_formulation"
            name="question_formulation"
            checked={formData.question_formulation}
            onChange={handleChange}
          />
        </div>

        {/* Question Moderation */}
        <div>
          <label>Question Moderation:</label>
          <input
            type="checkbox"
            id="question_moderation"
            name="question_moderation"
            checked={formData.question_moderation}
            onChange={handleChange}
          />
        </div>

        {/* Question Translation */}
        <div>
          <label>Question Translation:</label>
          <input
            type="checkbox"
            id="question_translation"
            name="question_translation"
            checked={formData.question_translation}
            onChange={handleChange}
          />
        </div>

        {/* Project Evaluation */}
        <div>
          <label>Project Evaluation:</label>
          <input
            type="checkbox"
            id="project_evaluation"
            name="project_evaluation"
            checked={formData.project_evaluation}
            onChange={handleChange}
          />
        </div>

        {/* Lab Exam Evaluation */}
        <div>
          <label>Lab Exam Evaluation:</label>
          <input
            type="checkbox"
            id="lab_exam_evaluation"
            name="lab_exam_evaluation"
            checked={formData.lab_exam_evaluation}
            onChange={handleChange}
          />
        </div>

        {/* Viva Voce Evaluation */}
        <div>
          <label>Viva Voce Evaluation:</label>
          <input
            type="checkbox"
            id="viva_voce_evaluation"
            name="viva_voce_evaluation"
            checked={formData.viva_voce_evaluation}
            onChange={handleChange}
          />
        </div>

        {/* Number of Tutorial */}
        <div>
          <label htmlFor="numberOfTutorial">Number of Tutorial:</label>
          <input
            type="number"
            id="number_of_tutorial"
            name="number_of_tutorial"
            min="0"
            value={formData.number_of_tutorial}
            onChange={handleChange}
          />
        </div>

        {/* Total Tutorial Answerscripts Evaluation */}
        <div>
          <label htmlFor="totalTutorialAnswerscriptsEvaluation">Total Tutorial Answerscripts Evaluation:</label>
          <input
            type="number"
            id="total_tutorial_answerscripts_evaluation"
            name="total_tutorial_answerscripts_evaluation"
            min="0"
            value={formData.total_tutorial_answerscripts_evaluation}
            onChange={handleChange}
          />
        </div>

        {/* Total Semester Final Exam Answerscripts Evaluation */}
        <div>
          <label htmlFor="totalSemesterFinalExamAnswerscriptsEvaluation">Total Semester Final Exam Answerscripts Evaluation:</label>
          <input
            type="number"
            id="total_semester_final_exam_answerscripts_evaluation"
            name="total_semester_final_exam_answerscripts_evaluation"
            min="0"
            value={formData.total_semester_final_exam_answerscripts_evaluation}
            onChange={handleChange}
          />
        </div>

        {/* Thesis Evaluation */}
        <div>
          <label>Thesis Evaluation:</label>
          <input
            type="checkbox"
            id="thesis_evaluation"
            name="thesis_evaluation"
            checked={formData.thesis_evaluation}
            onChange={handleChange}
          />
        </div>

        {/* Total Thesis Evaluation */}
        <div>
          <label htmlFor="totalThesisEvaluation">Total Thesis Evaluation:</label>
          <input
            type="number"
            id="total_thesis_evaluation"
            name="total_thesis_evaluation"
            min="0"
            value={formData.total_thesis_evaluation}
            onChange={handleChange}
          />
        </div>

        {/* Exam Committee Chairman */}
        <div>
          <label>Exam Committee Chairman:</label>
          <input
            type="checkbox"
            id="exam_committee_chairman"
            name="exam_committee_chairman"
            checked={formData.exam_committee_chairman}
            onChange={handleChange}
          />
        </div>

        {/* Supervisor */}
        <div>
          <label>Supervisor:</label>
          <input
            type="checkbox"
            id="supervisor"
            name="supervisor"
            checked={formData.supervisor}
            onChange={handleChange}
          />
        </div>

        {/* Add other form fields here */}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EvaluationForm;
