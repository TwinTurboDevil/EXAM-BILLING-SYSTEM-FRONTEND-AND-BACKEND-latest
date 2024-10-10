import React, { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../css/finalBill.css'

import {Table}  from 'react-bootstrap'
const Finalbill = () => {
  return (

     <Fragment>
     <Container>
       <Row>
         <Col>
        <h1 className="title">পরীক্ষা নিয়ন্ত্রকের অফিস</h1>
        <h2>জাহাঙ্গীরনগর বিশ্ববিদ্যালয়</h2>
        <h5><u>সাভার, ঢাকা</u></h5>
        {/* <img  src={logo1}  alt="Logo of JU" height={100}/> */}
        <h5>রেজি নং : ......................... পৃষ্ঠা নং : .......................</h5>
        <h5>স্মারক সংখ্যা : জাবি পনিঅ ...................... তারিখ : ................</h5><br/>
        <h4><u>পরীক্ষা সংক্রান্ত কাজের পারিতোষিক বিল ফরম - ১</u></h4>
        <h5>(পরীক্ষা কমিটির সভাপতির মাধ্যমে পরীক্ষা নিয়ন্ত্রকের অফিসে পাঠাতে হবে)</h5><br/>
        <div paddingTop={10}><h5>Remunation Bill Form of Examination Work</h5></div>
        
         </Col>
       </Row>

       <Row>
          <Col xs={3}>
            <h5>Name Of Examiner:</h5>
          </Col>
          <Col xs={9}>
            {/* Content for Name Of Examiner */}
          </Col>
        </Row>
        <Row>
          <Col xs={3}>
            <h5 className='h5WithPadding'>Designation:</h5>
          </Col>
          <Col xs={9}>
            {/* Content for Designation */}
          </Col>
        </Row>
        <Row>
          <Col xs={3}>
            <h5>Address:</h5>
          </Col>
          <Col xs={9}>
            {/* Content for Address */}
          </Col>
        </Row>
        <Row>
            <Col>
            <h5>Complete Details of Exam Related Work</h5>
            </Col>
        </Row>
        <Row>
            <Table responsive hover striped>
                <tbody>
                <tr>
                    <th>
                        Name of the Work
                    </th>
                    <th>
                        Amount
                    </th>
                </tr>
               
                 <tr>
                    <td>
                        Question Formulation
                    </td>
                    <td>
                        
                    </td>
                </tr>
                <tr>
                    <td>
                        Question Moderation
                    </td>
                    <td>
                        
                    </td>
                </tr>
                <tr>
                    <td>
                        Question Translation
                    </td>
                    <td>
                        
                    </td>
                </tr>
                <tr>
                    <td>
                        Answerscripts Evaluation
                    </td>
                    <td>
                        
                    </td>
                </tr>
                <tr>
                    <td>
                        Lab Exam Evaluation
                    </td>
                    <td>
                        
                    </td>
                </tr>
                <tr>
                    <td>
                        Viva Voce Evaluation
                    </td>
                    <td>
                        
                    </td>
                </tr>
                <tr>
                    <td>
                        Thesis/Project Evaluation
                    </td>
                    <td>
                        
                    </td>
                </tr>
                <tr>
                    <td>
                        Renumeration of Exam Committee Chairman
                    </td>
                    <td>
                        
                    </td>
                </tr>

                <tr>
                    <td>
                        Honourable Fee of Supervisor
                    </td>
                    <td>
                        
                    </td>
                </tr>
                <tr>
                    <td>
                        <strong>Total</strong>
                    </td>
                    <td>
                        
                    </td>
                </tr>
                </tbody>

            </Table>
        </Row>
     </Container>
   </Fragment>
  )
}

export default Finalbill
