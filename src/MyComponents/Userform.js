import React from "react"
import { useLocation } from "react-router-dom"

function Userform() {
    const {state} = useLocation();
    console.log( 'state',state);

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
            </table>
        );
     }
    return (
        <div>
            <h1> This is User Data file</h1>
            {renderCandidateTable()}
        </div>
    )
}

export default Userform 