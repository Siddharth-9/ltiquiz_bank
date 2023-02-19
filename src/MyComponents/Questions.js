import React from 'react';
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import questions from "./question.js"
import "./question.css"

function Questions() {
     const { state } = useLocation();
     console.log ('state', state);

     const navigate = useNavigate();
     const buttonSubmit = (e) => {
        e.preventDefault();
        navigate("/result_page")
     }

    const {
        candidate_comp,
        candidate_name,
        candidate_email,
        candidate_phone,
        candidate_tech
    } = state;

    function renderCandidateTable() {
        return (
            <table>
                <thead>
                    <tr>
                        <td>Competency</td>
                        <td>Candidate Name</td>
                        <td>Candidate Email</td>
                        <td>Candidate Phone</td>
                        <td>Candidate Tech</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{candidate_comp}</td>
                        <td>{candidate_name}</td>
                        <td>{candidate_email}</td>
                        <td>{candidate_phone}</td>
                        <td>{candidate_tech}</td>
                    </tr>
                </tbody>
            </table>
        );
     }

     const renderQuestions = (comp, tech) => {
        const questionAnswerArray = questions[comp.toLowerCase()][tech.toLowerCase()];
        const renderQuestionAnswer = () => questionAnswerArray.map(item => (
            <tr>
                <td>{item.q}</td>
                <td>{item.a}</td>
                <td>{item.p}</td>
            </tr>
        ));

        return (
            <table>
                <thead>
                    <tr>
                        <td>Question</td>
                        <td>Answer</td>
                        <td>Checkbox</td>
                    </tr>
                </thead>
                <tbody>
                    {renderQuestionAnswer()}
                </tbody>
            </table>
        );
     }
     return (
        <>
            <div className="question-container">
                <h1>Question Page</h1>
                {renderCandidateTable()}
                {renderQuestions(candidate_comp, candidate_tech)}
            </div>
            <div className='div'>
                <button type='submit' className='btn2' onClick={buttonSubmit}><strong>Submit</strong></button>
            </div>
        </>
     )
}


export default Questions;