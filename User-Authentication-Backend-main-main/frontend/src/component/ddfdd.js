import React, { useState } from 'react';
import { Link,useNavigate} from 'react-router-dom';

const FormPage = ({ setOptions }) => {
    const [name, setName] = useState('');
    const [semester, setSemester] = useState('');
    const [course, setCourse] = useState('');
    const [amount, setAmount] = useState(0);
    const navigate = useNavigate();
    const [forms, setForms] = useState([
      {
        questionModeration: '',
        questionTranslation: '',
        questionFormulation: '',
        projectEvaluation: '',
        labExamEvaluation: '',
        vivaVoceEvaluation: '',
        numberOfTutorial: '',
        totalTutorialAnswerscriptsEvaluation: '',
        totalSemesterFinalExamAnswerscriptsEvaluation: '',
        thesisEvaluation: '',
        examCommitteeChairman: '',
        supervisor: '',
      },
    ]);
  
    const handleInputChange = (index, field, value) => {
      const newForms = [...forms];
      newForms[index][field] = value;
      setForms(newForms);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      let newAmount = forms.reduce((total, form) => {
        let amount = 0;
    
        if (form.questionFormulation === 'Yes') amount += 60;
        if (form.questionModeration === 'Yes') amount += 60;
        if (form.questionTranslation === 'Yes') amount += 60;
        if (form.projectEvaluation === 'Yes') amount += 60;
        if (form.labExamEvaluation === 'Yes') amount += 60;
        if (form.vivaVoceEvaluation === 'Yes') amount += 60;
        
        amount += parseInt(form.totalTutorialAnswerscriptsEvaluation) * 30;
        amount += parseInt(form.totalSemesterFinalExamAnswerscriptsEvaluation) * 30;
        
        if (form.thesisEvaluation === 'Yes') amount += 60;
        
        amount += parseInt(form.examCommitteeChairman) * 30;
        amount += parseInt(form.supervisor) * 30;
    
        return total + amount;
      }, 0);
    
      setAmount(newAmount);
    
      const options = {
        name,
        semester,
        course,
        amount: parseFloat(newAmount),
        forms,
      };
      setOptions(options);
    
      // Redirect or do any other necessary action after submitting
      navigate('/options');
    };
  
    const addForm = () => {
      setForms([
        ...forms,
        {
          questionModeration: '',
          questionTranslation: '',
          questionFormulation: '',
          projectEvaluation: '',
          labExamEvaluation: '',
          vivaVoceEvaluation: '',
          numberOfTutorial: '',
          totalTutorialAnswerscriptsEvaluation: '',
          totalSemesterFinalExamAnswerscriptsEvaluation: '',
          thesisEvaluation: '',
          examCommitteeChairman: '',
          supervisor: '',
        },
      ]);
    };

  return (
    <div>
      <h2>Fill Details:</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name of the Examiner:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="semester">Choose Semester:</label>
          <select id="semester" value={semester} onChange={(e) => setSemester(e.target.value)}>
            <option value="">Select Semester</option>
            <option value="1st">1st Semester</option>
            <option value="2nd">2nd Semester</option>
          </select>
        </div>
        <div>
          <label htmlFor="course">Choose Course:</label>
          <select id="course" value={course} onChange={(e) => setCourse(e.target.value)}>
            <option value="">Select Course</option>
            <option value="DTC">DTC</option>
            <option value="Database">Database</option>
          </select>
        </div>

        {forms.map((form, index) => (
          <div key={index}>
            <div>
              <label htmlFor={`questionFormulation-${index}`}>Question Formulation:</label>
              <select
                id={`questionFormulation-${index}`}
                value={form.questionFormulation}
                onChange={(e) => handleInputChange(index, 'questionFormulation', e.target.value)}
              >
                <option value="">Select Option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div>
              <label htmlFor={`questionModeration-${index}`}>Question Moderation:</label>
              <select
                id={`questionModeration-${index}`}
                value={form.questionModeration}
                onChange={(e) => handleInputChange(index, 'questionModeration', e.target.value)}
              >
                <option value="">Select Option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div>
              <label htmlFor={`questionTranslation-${index}`}>Question Translation:</label>
              <select
                id={`questionTranslation-${index}`}
                value={form.questionTranslation}
                onChange={(e) => handleInputChange(index, 'questionTranslation', e.target.value)}
              >
                <option value="">Select Option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div>
              <label htmlFor={`projectEvaluation-${index}`}>Project Evaluation:</label>
              <select
                id={`projectEvaluation-${index}`}
                value={form.projectEvaluation}
                onChange={(e) => handleInputChange(index, 'projectEvaluation', e.target.value)}
              >
                <option value="">Select Option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div>
              <label htmlFor={`labExamEvaluation-${index}`}>Lab Exam Evaluation:</label>
              <select
                id={`labExamEvaluation-${index}`}
                value={form.labExamEvaluation}
                onChange={(e) => handleInputChange(index, 'labExamEvaluation', e.target.value)}
              >
                <option value="">Select Option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div>
              <label htmlFor={`vivaVoceEvaluation-${index}`}>Viva Voce Evaluation:</label>
              <select
                id={`vivaVoceEvaluation-${index}`}
                value={form.vivaVoceEvaluation}
                onChange={(e) => handleInputChange(index, 'vivaVoceEvaluation', e.target.value)}
              >
                <option value="">Select Option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div>
              <label htmlFor={`numberOfTutorial-${index}`}>Number of Tutorial:</label>
              <input
                type="number"
                id={`numberOfTutorial-${index}`}
                value={form.numberOfTutorial}
                onChange={(e) => handleInputChange(index, 'numberOfTutorial', e.target.value)}
              />
            </div>
            <div>
              <label htmlFor={`totalTutorialAnswerscriptsEvaluation-${index}`}>Total Tutorial Answerscripts Evaluation:</label>
              <input
                type="number"
                id={`totalTutorialAnswerscriptsEvaluation-${index}`}
                value={form.totalTutorialAnswerscriptsEvaluation}
                onChange={(e) => handleInputChange(index, 'totalTutorialAnswerscriptsEvaluation', e.target.value)}
              />
            </div>
            <div>
              <label htmlFor={`totalSemesterFinalExamAnswerscriptsEvaluation-${index}`}>Total Semester Final Exam Answerscripts Evaluation:</label>
              <input
                type="number"
                id={`totalSemesterFinalExamAnswerscriptsEvaluation-${index}`}
                value={form.totalSemesterFinalExamAnswerscriptsEvaluation}
                onChange={(e) => handleInputChange(index, 'totalSemesterFinalExamAnswerscriptsEvaluation', e.target.value)}
              />
            </div>
            <div>
              <label htmlFor={`thesisEvaluation-${index}`}>Thesis Evaluation:</label>
              <select
                id={`thesisEvaluation-${index}`}
                value={form.thesisEvaluation}
                onChange={(e) => handleInputChange(index, 'thesisEvaluation', e.target.value)}
              >
                <option value="">Select Option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div>
              <label htmlFor={`examCommitteeChairman-${index}`}>Exam Committee Chairman:</label>
              <select
                id={`examCommitteeChairman-${index}`}
                value={form.examCommitteeChairman}
                onChange={(e) => handleInputChange(index, 'examCommitteeChairman', e.target.value)}
              >
                <option value="">Select Option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div>
              <label htmlFor={`supervisor-${index}`}>Supervisor:</label>
              <select
                id={`supervisor-${index}`}
                value={form.supervisor}
                onChange={(e) => handleInputChange(index, 'supervisor', e.target.value)}
              >
                <option value="">Select Option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>
        ))}

        <button type="button" onClick={addForm}>
          Add Another Form
        </button>
        <button type="submit">Submit</button>
      </form>
      <div>
        <Link to="/options">Go to Options Page</Link>
      </div>
    </div>
  );
};

export default FormPage;
