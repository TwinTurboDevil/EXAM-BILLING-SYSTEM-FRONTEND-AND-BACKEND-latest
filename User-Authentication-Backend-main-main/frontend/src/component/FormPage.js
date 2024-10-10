import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const FormPage = ({ setOptions }) => {
  const [name, setName] = useState('');
  const [semesters, setSemesters] = useState([]);
  const [courses, setCourses] = useState([]);
  const [questionModeration, setQuestionModeration] = useState('');
  const [questionTranslation, setQuestionTranslation] = useState('');
  const [questionFormulation ,setQuestionFormulation ] = useState('');
  const [project_evaluation ,setproject_evaluation ] = useState('');
  const [lab_exam_evaluation ,setlab_exam_evaluation ] = useState('');
  const [viva_voce_evaluation ,setviva_voce_evaluation ] = useState('');
  const [number_of_tutorial ,setnumber_of_tutorial ] = useState('');
  const [total_tutorial_answerscripts_evaluation ,settotal_tutorial_answerscripts_evaluation ] = useState('');
  const [total_semester_final_exam_answerscripts_evaluation ,settotal_semester_final_exam_answerscripts_evaluation ] = useState('');
  const [thesis_evaluation ,setthesis_evaluation ] = useState('');
  const [exam_committee_chairman ,setexam_committee_chairman ] = useState('');
  const [supervisor ,setsupervisor ] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [amount, setAmount] = useState(0); 
  const [questionModeration1, setQuestionModeration1] = useState('');
  const [questionTranslation1, setQuestionTranslatio1] = useState('');
  const [questionFormulation1 ,setQuestionFormulation1 ] = useState('');
  const [project_evaluation1 ,setproject_evaluation1 ] = useState('');
  const [lab_exam_evaluation1 ,setlab_exam_evaluation1] = useState('');
  const [viva_voce_evaluation1 ,setviva_voce_evaluation1 ] = useState('');
  const [number_of_tutorial1 ,setnumber_of_tutorial1 ] = useState('');
  const [total_tutorial_answerscripts_evaluation1 ,settotal_tutorial_answerscripts_evaluation1] = useState('');
  const [total_semester_final_exam_answerscripts_evaluation1 ,settotal_semester_final_exam_answerscripts_evaluation1 ] = useState('');
  const [thesis_evaluation1 ,setthesis_evaluation1 ] = useState('');
  const [exam_committee_chairman1 ,setexam_committee_chairman1 ] = useState('');
  const [supervisor1 ,setsupervisor1 ] = useState('');
  const [showForm1, setShowForm1] = useState(false);// Initialize amount state
  const [questionModeration2, setQuestionModeration2] = useState('');
  const [questionTranslation2, setQuestionTranslation2] = useState('');
  const [questionFormulation2 ,setQuestionFormulation2 ] = useState('');
  const [project_evaluation2 ,setproject_evaluation2 ] = useState('');
  const [lab_exam_evaluation2 ,setlab_exam_evaluation2 ] = useState('');
  const [viva_voce_evaluation2 ,setviva_voce_evaluation2 ] = useState('');
  const [number_of_tutorial2 ,setnumber_of_tutorial2 ] = useState('');
  const [total_tutorial_answerscripts_evaluation2 ,settotal_tutorial_answerscripts_evaluation2 ] = useState('');
  const [total_semester_final_exam_answerscripts_evaluation2 ,settotal_semester_final_exam_answerscripts_evaluation2 ] = useState('');
  const [thesis_evaluation2 ,setthesis_evaluation2 ] = useState('');
  const [exam_committee_chairman2 ,setexam_committee_chairman2 ] = useState('');
  const [supervisor2 ,setsupervisor2 ] = useState('');
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
 
 
 
  const handleSubmit = (e) => {
    e.preventDefault();
    // Calculate new amount based on the current form inputs
    let newAmount = (questionFormulation === 'Yes' ? 60 : 0) + 
                    (questionModeration === 'Yes' ? 60 : 0) + 
                    (questionTranslation === 'Yes' ? 60 : 0) +
                    (project_evaluation === 'Yes' ? 60 : 0) + 
                    (lab_exam_evaluation === 'Yes' ? 60 :0) + 
                    (viva_voce_evaluation === 'Yes' ? 60 :0) + 
                    
                    (total_tutorial_answerscripts_evaluation *number_of_tutorial* 30) + 
                    (total_semester_final_exam_answerscripts_evaluation * 30)+
                    (thesis_evaluation === 'Yes'? 60 : 0)+
                    (exam_committee_chairman === 'Yes'? 60 : 0)+
                    (supervisor === 'Yes'? 60 : 0)+
                    (questionFormulation1 === 'Yes' ? 60 : 0) + 
                    (questionModeration1 === 'Yes' ? 60 : 0) + 
                    (questionTranslation1 === 'Yes' ? 60 : 0) +
                    (project_evaluation1 === 'Yes' ? 60 : 0) + 
                    (lab_exam_evaluation1=== 'Yes' ? 60 :0) + 
                    (viva_voce_evaluation1 === 'Yes' ? 60 :0) + 
                    (total_tutorial_answerscripts_evaluation1 * number_of_tutorial1  * 30) + 
                    (total_semester_final_exam_answerscripts_evaluation1* 30)+
                    (thesis_evaluation1 === 'Yes'? 60 : 0)+
                    (exam_committee_chairman1 === 'Yes'? 60 : 0)+
                    (supervisor1 === 'Yes'? 60 : 0)+
                    (questionFormulation2 === 'Yes' ? 60 : 0) + 
                    (questionModeration2 === 'Yes' ? 60 : 0) + 
                    (questionTranslation2 === 'Yes' ? 60 : 0) +
                    (project_evaluation2 === 'Yes' ? 60 : 0) + 
                    (lab_exam_evaluation2 === 'Yes' ? 60 :0) + 
                    (viva_voce_evaluation2 === 'Yes' ? 60 :0) + 
                    (total_tutorial_answerscripts_evaluation2 *number_of_tutorial2 * 30) + 
                    (total_semester_final_exam_answerscripts_evaluation2 * 30)+
                    (thesis_evaluation2 === 'Yes'? 60 : 0)+
                    (exam_committee_chairman2 === 'Yes'? 60 : 0)+
                    (supervisor2 === 'Yes'? 60 : 0);
 
    
    // Update amount by adding the new amount to the previous value
    setAmount(amount + newAmount);
    
    // Pass all form values including amount to the parent component1
    setOptions({ name, semesters, courses,questionFormulation, number_of_tutorial,number_of_tutorial2,questionModeration, questionTranslation, amount: amount + newAmount,project_evaluation,lab_exam_evaluation,viva_voce_evaluation,total_semester_final_exam_answerscripts_evaluation,number_of_tutorial1,total_tutorial_answerscripts_evaluation,thesis_evaluation,exam_committee_chairman,supervisor,questionFormulation1, questionModeration1, questionTranslation1,project_evaluation1,lab_exam_evaluation1,viva_voce_evaluation1,total_semester_final_exam_answerscripts_evaluation1,total_tutorial_answerscripts_evaluation1,thesis_evaluation1,exam_committee_chairman1,supervisor1,questionFormulation2, questionModeration2, questionTranslation2,project_evaluation2,lab_exam_evaluation2,viva_voce_evaluation2,total_semester_final_exam_answerscripts_evaluation2,total_tutorial_answerscripts_evaluation2,thesis_evaluation2,exam_committee_chairman2,supervisor2 });
  };
  return (
    <div className='container mt-5'>

<div className="row">
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className="container">
                        <Link className="navbar-brand" to="/billing">Billing System</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item"><Link className="nav-link" to="/home">Home</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/billing">Course Info</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/profile">Profile</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/">Log out</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

<div className="card p-4 mb-4" style={{ marginTop: '50px', marginBottom: '20px' }}>
      <h2>Fill Details for Course Information:</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
        <label htmlFor="semester">Semester:</label>
            <select id="semester"  className="form-select" value={selectedSemester} onChange={handleSemesterChange}>
                <option value="">Select Semester</option>
                {semesters.map(semester => (
                    <option key={semester.id} value={semester.id}>{semester.name}</option>
                ))}
            </select>
            </div>
          <div className="mb-3">
            <label htmlFor="course">Course:</label>
            <select className="form-select" id="course" value={selectedCourse} onChange={handleCourseChange}>
                <option value="">Select Course</option>
                {courses.map(course => (
                    <option key={course.id} value={course.id}>{course.name}</option>
                ))}
            </select>
            </div>
        <div className="mb-3">
          <label htmlFor="questionFormulation">Question Formulation:</label>
          <select className="form-select" id="questionFormulation" value={questionFormulation} onChange={(e) => setQuestionFormulation(e.target.value)}>
            <option value="">Select Option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="questionModeration">Question Moderation:</label>
          <select className="form-select" id="questionModeration" value={questionModeration} onChange={(e) => setQuestionModeration(e.target.value)}>
            <option value="">Select Option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="questionTranslation">Question Translation:</label>
          <select className="form-select" id="questionTranslation" value={questionTranslation} onChange={(e) => setQuestionTranslation(e.target.value)}>
            <option value="">Select Option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="project_evaluation">Project Evaluation:</label>
          <select className="form-select" id="project_evaluation" value={project_evaluation} onChange={(e) => setproject_evaluation(e.target.value)}>
            <option value="">Select Option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="lab_exam_evaluation">Lab Exam Evaluation:</label>
          <select className="form-select" id="lab_exam_evaluation" value={lab_exam_evaluation} onChange={(e) => setlab_exam_evaluation(e.target.value)}>
            <option value="">Select Option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="viva_voce_evaluation">Viva Voce Evaluation:</label>
          <select className="form-select" id="viva_voce_evaluation" value={viva_voce_evaluation} onChange={(e) => setviva_voce_evaluation(e.target.value)}>
            <option value="">Select Option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="number_of_tutorial">Number of Tutorials:</label>
          <input className="form-control" type="number" id="number_of_tutorial" value={number_of_tutorial} onChange={(e) => setnumber_of_tutorial(e.target.value)}>
 
          </input>
        </div>
        <div className="mb-3">
          <label htmlFor="total_tutorial_answerscripts_evaluation">Total Tutorial Answerscripts Evaluation:</label>
          <input className="form-control" type="number" id="total_tutorial_answerscripts_evaluation" value={total_tutorial_answerscripts_evaluation} onChange={(e) => settotal_tutorial_answerscripts_evaluation(e.target.value)}>
          </input>
        </div>
        <div className="mb-3">
          <label htmlFor="total_semester_final_exam_answerscripts_evaluation">Total Semester Final Exam Answerscripts Evaluation:</label>
          <input className="form-control" type="number" id="total_semester_final_exam_answerscripts_evaluation" value={total_semester_final_exam_answerscripts_evaluation} onChange={(e) => settotal_semester_final_exam_answerscripts_evaluation(e.target.value)}>
 
          </input>
        </div>
        <div className="mb-3">
          <label htmlFor="thesis_evaluation">Thesis Evaluation:</label>
          <select className="form-select" id="thesis_evaluation" value={thesis_evaluation} onChange={(e) => setthesis_evaluation(e.target.value)}>
            <option value="">Select Option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="exam_committee_chairman">Exam Committee Chairman:</label>
          <select className="form-select" id="exam_committee_chairman" value={exam_committee_chairman} onChange={(e) => setexam_committee_chairman(e.target.value)}>
            <option value="">Select Option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="supervisor">Supervisor:</label>
          <select className="form-select" id="supervisor" value={supervisor} onChange={(e) => setsupervisor(e.target.value)}>
            <option value="">Select Option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div class="d-grid gap-2 col-6 mx-auto">
          <button className="btn btn-primary" onClick={() => setShowForm(!showForm)}>Add 2nd Form</button>
          <button type="submit" className="btn btn-success">Submit</button>
        </div>
        
      </form>
      
      
      {showForm && (
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
        <label htmlFor="semester">Semester:</label>
            <select className="form-select" id="semester" value={selectedSemester} onChange={handleSemesterChange}>
                <option value="">Select Semester</option>
                {semesters.map(semester => (
                    <option key={semester.id} value={semester.id}>{semester.name}</option>
                ))}
            </select>
            </div>
          <div className="mb-3">
            <label htmlFor="course">Course:</label>
            <select className="form-select" id="course" value={selectedCourse} onChange={handleCourseChange}>
                <option value="">Select Course</option>
                {courses.map(course => (
                    <option key={course.id} value={course.id}>{course.name}</option>
                ))}
            </select>
            </div>
        <div className="mb-3">
          <label htmlFor="questionFormulation1">Question Formulation:</label>
          <select className="form-select" id="questionFormulation1" value={questionFormulation1} onChange={(e) => setQuestionFormulation1(e.target.value)}>
            <option value="">Select Option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="questionModeration1">Question Moderation:</label>
          <select className="form-select" id="questionModeration1" value={questionModeration1} onChange={(e) => setQuestionModeration1(e.target.value)}>
            <option value="">Select Option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="questionTranslation1">Question Translation:</label>
          <select className="form-select" id="questionTranslation1" value={questionTranslation1} onChange={(e) => setQuestionTranslatio1(e.target.value)}>
            <option value="">Select Option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="project_evaluation1">Project Evaluation:</label>
          <select className="form-select" id="project_evaluation1" value={project_evaluation1} onChange={(e) => setproject_evaluation1(e.target.value)}>
            <option value="">Select Option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="lab_exam_evaluation1">Lab Exam Evaluation:</label>
          <select className="form-select" id="lab_exam_evaluation1" value={lab_exam_evaluation1} onChange={(e) => setlab_exam_evaluation1(e.target.value)}>
            <option value="">Select Option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="viva_voce_evaluation1">Viva Voce Evaluation:</label>
          <select className="form-select" id="viva_voce_evaluation1" value={viva_voce_evaluation1} onChange={(e) => setviva_voce_evaluation1(e.target.value)}>
            <option value="">Select Option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="number_of_tutorial1">Number of Tutorials:</label>
          <input className="form-control" type="number" id="number_of_tutorial1" value={number_of_tutorial1} onChange={(e) => setnumber_of_tutorial1(e.target.value)}>
 
          </input>
        </div>
        <div className="mb-3">
          <label htmlFor="total_tutorial_answerscripts_evaluation1">Total Tutorial Answerscripts Evaluation:</label>
          <input className="form-control" type="number" id="total_tutorial_answerscripts_evaluation1" value={total_tutorial_answerscripts_evaluation1} onChange={(e) => settotal_tutorial_answerscripts_evaluation1(e.target.value)}>
          </input>
        </div>
        <div className="mb-3">
          <label htmlFor="total_semester_final_exam_answerscripts_evaluation1">Total Semester Final Exam Answerscripts Evaluation:</label>
          <input className="form-control" type="number" id="total_semester_final_exam_answerscripts_evaluation1" value={total_semester_final_exam_answerscripts_evaluation1} onChange={(e) => settotal_semester_final_exam_answerscripts_evaluation1(e.target.value)}>
 
          </input>
        </div>
        <div className="mb-3"> 
          <label htmlFor="thesis_evaluation1">Thesis Evaluation:</label>
          <select className="form-select" id="thesis_evaluation1" value={thesis_evaluation1} onChange={(e) => setthesis_evaluation1(e.target.value)}>
            <option value="">Select Option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="exam_committee_chairman1">Exam Committee Chairman:</label>
          <select className="form-select" id="exam_committee_chairman1" value={exam_committee_chairman1} onChange={(e) => setexam_committee_chairman1(e.target.value)}>
            <option value="">Select Option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="supervisor1">Supervisor:</label>
          <select className="form-select" id="supervisor" value={supervisor1} onChange={(e) => setsupervisor1(e.target.value)}>
            <option value="">Select Option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
          <div className='d-grid gap-2 col-6 mx-auto'>
            <button className="btn btn-success" type="submit">Submit</button>
          </div>
        </form>
      )}
      <div className='d-grid gap-2 col-6 mx-auto'>
        <button class="btn btn-primary" onClick={() => setShowForm1(!showForm1)} style={{ marginTop: '10px', marginBottom: '20px' }}>Add 3rd Form</button>
      </div>
      {showForm1 && (
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
        <label htmlFor="semester">Semester:</label>
            <select className="form-select" id="semester" value={selectedSemester} onChange={handleSemesterChange}>
                <option value="">Select Semester</option>
                {semesters.map(semester => (
                    <option key={semester.id} value={semester.id}>{semester.name}</option>
                ))}
            </select>
            </div>
          <div className="mb-3"> 
            <label htmlFor="course">Course:</label>
            <select className="form-select" id="course" value={selectedCourse} onChange={handleCourseChange}>
                <option value="">Select Course</option>
                {courses.map(course => (
                    <option key={course.id} value={course.id}>{course.name}</option>
                ))}
            </select>
            </div>
        
        <div className="mb-3">
          <label htmlFor="questionFormulation2">Question Formulation:</label>
          <select className="form-select" id="questionFormulation2" value={questionFormulation2} onChange={(e) => setQuestionFormulation2(e.target.value)}>
            <option value="">Select Option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="questionModeration2">Question Moderation:</label>
          <select className="form-select" id="questionModeration2" value={questionModeration2} onChange={(e) => setQuestionModeration2(e.target.value)}>
            <option value="">Select Option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="questionTranslation2">Question Translation:</label>
          <select className="form-select" id="questionTranslation2" value={questionTranslation2} onChange={(e) => setQuestionTranslation2(e.target.value)}>
            <option value="">Select Option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="project_evaluation2">Project Evaluation:</label>
          <select className="form-select" id="project_evaluation2" value={project_evaluation2} onChange={(e) => setproject_evaluation2(e.target.value)}>
            <option value="">Select Option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="lab_exam_evaluation2">Lab Exam Evaluation:</label>
          <select className="form-select" id="lab_exam_evaluation2" value={lab_exam_evaluation2} onChange={(e) => setlab_exam_evaluation2(e.target.value)}>
            <option value="">Select Option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="viva_voce_evaluation2">Viva Voce Evaluation:</label>
          <select className="form-select" id="viva_voce_evaluation2" value={viva_voce_evaluation2} onChange={(e) => setviva_voce_evaluation2(e.target.value)}>
            <option value="">Select Option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="number_of_tutorial2">Number of Tutorials:</label>
          <input className="form-control" type="number" id="number_of_tutorial2" value={number_of_tutorial2} onChange={(e) => setnumber_of_tutorial2(e.target.value)}>
 
          </input>
        </div>
        <div className="mb-3">
          <label htmlFor="total_tutorial_answerscripts_evaluation2">Total Tutorial Answerscripts Evaluation:</label>
          <input className="form-control" type="number" id="total_tutorial_answerscripts_evaluation2" value={total_tutorial_answerscripts_evaluation2} onChange={(e) => settotal_tutorial_answerscripts_evaluation2(e.target.value)}>
          </input>
        </div>
        <div className="mb-3">
          <label htmlFor="total_semester_final_exam_answerscripts_evaluation2">Total Semester Final Exam Answerscripts Evaluation:</label>
          <input className="form-control" type="number" id="total_semester_final_exam_answerscripts_evaluation2" value={total_semester_final_exam_answerscripts_evaluation2} onChange={(e) => settotal_semester_final_exam_answerscripts_evaluation2(e.target.value)}>
 
          </input>
        </div>
        <div className="mb-3">
          <label htmlFor="thesis_evaluation2">Thesis Evaluation:</label>
          <select className="form-select" id="thesis_evaluation2" value={thesis_evaluation2} onChange={(e) => setthesis_evaluation2(e.target.value)}>
            <option value="">Select Option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="exam_committee_chairman2">Exam Committee Chairman:</label>
          <select className="form-select" id="exam_committee_chairman2" value={exam_committee_chairman2} onChange={(e) => setexam_committee_chairman2(e.target.value)}>
            <option value="">Select Option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="supervisor2">Supervisor:</label>
          <select className="form-select" id="supervisor2" value={supervisor2} onChange={(e) => setsupervisor2(e.target.value)}>
            <option value="">Select Option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className='d-grid gap-2 col-6 mx-auto'>
            <button className="btn btn-success" type="submit">Submit</button>
          </div>
        </form>
      )}
 
      <Link to="/display">
        <div className='d-grid gap-2 col-6 mx-auto'>
          <button className="btn btn-info" style={{ marginTop: '20px', marginBottom: '20px' }}>Display the Final Bill</button>
        </div>
        
      </Link>
    </div>

    </div>
  );
};
export default FormPage;