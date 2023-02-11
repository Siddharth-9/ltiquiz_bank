import React from "react"
import {useState} from "react";
import { useNavigate} from "react-router-dom";
 
function Userdata() {
    const navigate= useNavigate();

    const handleSubmit = () => {
        if (selectedValue === "HTML" || "C1")
        navigate("/questions");
    }

    const [selectedValue, setSelectedValue] = useState("");
    return(
        <div className="container">
            <main className="mainform">
                <h1>  <span class="italic">LTIMindtree</span> Recuirtment Assessment Tool</h1>
                <form className="formInput">
                    <div className ="row">
                        <div className= "col-25">
                            <label htmlFor="candidate name">Candidate Name</label>
                        </div>
                        <div className="col-75">
                            <input type="text" name="candidate name" id="candidate name" placeholder="Enter your fullname" autoComplete="off" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="Email">Email</label>
                        </div>
                        <div className="col-75">
                            <input type="text" name="Email" id="Email" placeholder="Enter your email" autoComplete="off" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="Date of Birth">Date of Birth</label>
                        </div>
                        <div className="col-75">
                            <input type="date" name="dateBirth" id="birthDate" autoComplete="off" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="Phone Number">Phone Number</label>
                        </div>
                        <div className="col-75">
                            <input type="text" name="Phone Number" id="Phone Number" placeholder="Enter your phone number" autoComplete="off"/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="Select Technology">Select Technology</label>
                        </div>
                        <div className="col-75">
                            <select value= {selectedValue} onChange={(e)=> setSelectedValue(e.target.value)} name="Technology" id="Technology">
                                <option value="HTML">HTML</option>
                                <option value="CSS">CSS</option>
                                <option value="JavaScript">JavaScript</option>
                                <option value="Angular">Angular</option>
                                <option value="React">React</option>
                            </select>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="Select Competency">Select Competency</label>
                        </div>
                        <div className="col-75">
                            <select value= {selectedValue} onChange={(e)=> setSelectedValue(e.target.value)} name="Competency" id="Competency">
                                <option value="C1">C1</option>
                                <option value="C2">C2</option>
                                <option value="C3">C3</option>
                                <option value="C4">C4</option>
                                <option value="C5">C5</option>
                            </select>
                        </div>
                    </div>
                    <button type="submit" className="btn" onClick={handleSubmit}><strong>Submit</strong></button>
                </form>
            </main>
        </div>
    )
}

export default Userdata;