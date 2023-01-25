import React from "react";
function userdata() {
    return(
        <>
            <form className="forminput">
            <label htmlFor="candidate name">Candidate Name</label>
            <input type="text" name="candidate name" id="candidate name" placeholder="Enter you fullname" />

            <label htmlFor="Email">Email</label>
            <input type="text" name="Email" id="Email" placeholder="Enter your email"/>

            <label htmlFor="Date of Birth">Date of Birth</label> 
            <input type="date" name="birthDate" id="birthDate" />

            <label htmlFor="Phone Number">Phone Number</label> 
            <input type="text" name="Phone Number" id="Phone Number" placeholder="Enter your phone number"/>

            <label htmlFor="Select Technology">Select Technology:</label>
            <select name="Technology" id="Technology">
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
                <option value="Javascript">Javascript</option>
                <option value="Angular">Angular</option>
                <option value="React">React</option>
            </select>
            <label htmlFor="Select Competency">Select</label>
            <select name="Competency Level" id="competency level">
                 <option value="C1">C1</option>
                 <option value="C2">C2</option>
                 <option value="C3">C3</option>
                 <option value="C4">C4</option>
                 <option value="C5">C5</option>
            </select>
        </form>

    </>
     )
}
export default userdata
