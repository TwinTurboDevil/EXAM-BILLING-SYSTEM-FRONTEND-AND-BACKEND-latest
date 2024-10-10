// DisplayPage.js
import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import universityLogo from '../component/universityLogo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Bill.css'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const DisplayPage = ({ options }) => {
  const {
    questionFormulation, questionModeration, questionTranslation, project_evaluation, lab_exam_evaluation,number_of_tutorial,number_of_tutorial2,number_of_tutorial1,
    viva_voce_evaluation, total_semester_final_exam_answerscripts_evaluation, total_tutorial_answerscripts_evaluation,
    thesis_evaluation, exam_committee_chairman, supervisor,
    questionFormulation1, questionModeration1, questionTranslation1, project_evaluation1, lab_exam_evaluation1,
    viva_voce_evaluation1, total_semester_final_exam_answerscripts_evaluation1, total_tutorial_answerscripts_evaluation1,
    thesis_evaluation1, exam_committee_chairman1, supervisor1,
    questionFormulation2, questionModeration2, questionTranslation2, project_evaluation2, lab_exam_evaluation2,
    viva_voce_evaluation2, total_semester_final_exam_answerscripts_evaluation2, total_tutorial_answerscripts_evaluation2,
    thesis_evaluation2, exam_committee_chairman2, supervisor2
  } = options;
  
  const [username, setUsername] = useState(null);
  const [loader,setLoader] = useState(false);

  const downloadPDF = () => {
    const capture = document.querySelector('.actual-receipt');
    setLoader(true);
    html2canvas(capture).then((canvas)=>{
      const imgData = canvas.toDataURL('img/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const componentWidth = pdf.internal.pageSize.getWidth();
      const componentHeight = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
      setLoader(false);
      pdf.save('finalBill.pdf');
    })
  }


  useEffect(() => {
    // Retrieve user's name from localStorage
    const storedUsername = localStorage.getItem('user');
    if (storedUsername) {
      setUsername(JSON.parse(storedUsername));
    }
  }, []);

  // Helper function to calculate the total score for Yes/No type inputs
  const calculateScore = (option, option1, option2) => {
    return (option === 'Yes' ? 60 : 0) + (option1 === 'Yes' ? 60 : 0) + (option2 === 'Yes' ? 60 : 0);
  };

  // Calculate individual scores
  const questionFormulationScore = calculateScore(questionFormulation, questionFormulation1, questionFormulation2);

  const questionModerationScore = calculateScore(questionModeration, questionModeration1, questionModeration2);
  const questionTranslationScore = calculateScore(questionTranslation, questionTranslation1, questionTranslation2);
  const projectEvaluationScore = calculateScore(project_evaluation, project_evaluation1, project_evaluation2);
  const vivaVoceEvaluationScore = calculateScore(viva_voce_evaluation, viva_voce_evaluation1, viva_voce_evaluation2);
  const labExamEvaluationScore = calculateScore(lab_exam_evaluation, lab_exam_evaluation1, lab_exam_evaluation2);
  const thesis_evaluationScore= calculateScore(thesis_evaluation,thesis_evaluation1,thesis_evaluation2);
  const exam_committee_chairmanScore= calculateScore(exam_committee_chairman,exam_committee_chairman1,exam_committee_chairman2);
  const supervisorScore= calculateScore(supervisor,supervisor1,supervisor2);

  // Calculate totals for numerical inputs
  const totalSemesterFinalExamAnswerScriptsEvaluationScore =
    (total_semester_final_exam_answerscripts_evaluation * 30) +
    (total_semester_final_exam_answerscripts_evaluation1 * 30) +
    (total_semester_final_exam_answerscripts_evaluation2 * 30);

  const totalTutorialAnswerScriptsEvaluationScore =
    (total_tutorial_answerscripts_evaluation * 30) +
    (total_tutorial_answerscripts_evaluation1 * 30) +
    (total_tutorial_answerscripts_evaluation2 * 30);

  const generateRandomNumber = () => Math.floor(100000 + Math.random() * 900000);
  const serialNumber = generateRandomNumber();
  const receiptNumber = generateRandomNumber();
  const memorialNumber = generateRandomNumber();
  const numberoftutScore=number_of_tutorial+number_of_tutorial2+number_of_tutorial1;

  // Calculate the total score
  const totalScore = questionFormulationScore + questionModerationScore + questionTranslationScore +thesis_evaluationScore+exam_committee_chairmanScore+supervisorScore+
    projectEvaluationScore + vivaVoceEvaluationScore + labExamEvaluationScore +
    totalSemesterFinalExamAnswerScriptsEvaluationScore + totalTutorialAnswerScriptsEvaluationScore;

  return (
    <div className="container mt-5">
      <div className='actual-receipt ms-5 me-5 p-3'>
      <div className="d-flex align-items-center mb-4">
  <img src={universityLogo} alt="University Logo" className="img-fluid" style={{ maxWidth: '150px' }} />
  <div className="ms-5">
    <h3 className="text-left ms-5">Exam Controller Office </h3>
    <h5 className="text-left ms-5">Jahangirnagar University</h5>
    <h5 className="text-left ms-5">Savar, Dhaka </h5>
  </div>
</div>  


<div>
  <p className='text-center mb-0'><strong>Serial Number:</strong> {serialNumber}</p>
  <p className='text-center mt-0'><strong>Bank Acc Number: {username && <span>{username.bankaccno}</span>}</strong></p>
  <p className="text-center mt-0 mb-4"><strong>Receipt Number: {receiptNumber} | Memorial Number: {memorialNumber}</strong></p>
</div>
<div className='pb-3'>
  
  <h3 className="text-center mt-1 mb-0">Renumeration Bill Form of Examination Work</h3>
</div>
    <div >
    <h6><strong>Name of the Examiner: </strong>{username && <span>{username.name}</span>}</h6>
      <h6><strong>Designation: </strong>{username && <span>{username.designation}</span>}</h6>
      <h6><strong>Address: </strong>{username && <span>{username.address}</span>}</h6>
    </div>



      <table className="table table-bordered">
        <thead className="thead-light">
          <tr>
            <th>Name of Work</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Question Formulation</td>
            <td>{questionFormulationScore}</td>
          </tr>
          <tr>
            <td>Question Translation</td>
            <td>{questionTranslationScore}</td>
          </tr>
          <tr>
            <td>Question Moderation</td>
            <td>{questionModerationScore}</td>
          </tr>
          <tr>
            <td>Project Evaluation</td>
            <td>{projectEvaluationScore}</td>
          </tr>
          <tr>
            <td>Viva Voce Evaluation</td>
            <td>{vivaVoceEvaluationScore}</td>
          </tr>
          <tr>
            <td>Lab Exam Evaluation</td>
            <td>{labExamEvaluationScore}</td>
          </tr>
          <tr>
            <td>Thesis Evaluation</td>
            <td>{thesis_evaluationScore}</td>
          </tr>
          <tr>
            <td>Exam Committee Chairman</td>
            <td>{exam_committee_chairmanScore}</td>
          </tr>
          <tr>
            <td>Supervisor</td>
            <td>{supervisorScore}</td>
          </tr>
          <tr>
            <td>Total Semester Final Exam Answer Scripts Evaluation</td>
            <td>{totalSemesterFinalExamAnswerScriptsEvaluationScore}</td>
          </tr>
          <tr>
            <td>Total Tutorial Answer Scripts Evaluation</td>
            <td>{totalTutorialAnswerScriptsEvaluationScore}</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>{totalScore}</td>
          </tr>
        </tbody>
      </table>
      <div className="row mt-5">
  <div className="col-md-6 text-center">
    <div className="border p-3">
      <p>_________________________</p>
      <p><strong>Sign of the Exam Committee Chairman</strong></p>
    </div>
  </div>
  <div className="col-md-6 text-center">
    <div className="border p-3">
      <h4>{username && <span>{username.name}</span>}</h4>
      <p>_________________________</p>
      <p><strong>Sign of the Examiner</strong></p>
    </div>
  </div>
</div>
<div className="row mt-5 justify-content-center">
  <div className="col-md-6 text-center">
    <div className="border p-3">
      <p>_________________________</p>
      <p><strong>Sign of the Exam Controller</strong></p>
    </div>
  </div>
</div>
<div className="row mt-5 justify-content-center">
        <div className="col-md-6 text-center">
          <div className="revenue-stamp border p-3">
            <p><strong>Revenue Stamp</strong></p>
          </div>
        </div>
      </div>
      </div>
      
      <div className='receipt-action-div'>
  <div className='d-flex justify-content-center gap-3'>
    <Link to="/home">
      <button className="btn btn-primary">Go Back to Home Page</button>
    </Link>
    <button
      className="receipt-modal-download-button btn btn-primary"
      onClick={downloadPDF}
      disabled={loader === true}
    >
      {loader ? (
        <span>Downloading</span>
      ) : (
        <span>Download as PDF</span>
      )}
    </button>
  </div>
</div>

    </div>
  );
};

export default DisplayPage;