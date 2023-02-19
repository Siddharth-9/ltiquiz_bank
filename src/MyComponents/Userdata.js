import React from "react"
import { useState } from "react";
import { useNavigate} from "react-router-dom";
import "./Userdata.css"

 
function Userdata() {
    const navigate = useNavigate();

    const [selectedValue, setSelectedValue] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/questions", {
            state: {
                ...selectedValue
            }
        });
    }

    const handleChange = (e) => {
        setSelectedValue({
            ...selectedValue,
            [e.target.name] : e.target.value,
        });
    }

    return(
        <div className="container">
            <main className="mainform">
                <h1>  <span className="italic">LTIMindtree</span> Recuirtment Assessment Tool</h1>
                <form className="formInput">
                    <div className ="row">
                        <div className= "col-25">
                            <label htmlFor="candidate_name">Candidate Name</label>
                        </div>
                        <div className="col-75">
                            <input type="text" name="candidate_name" id="candidate_name" placeholder="Enter your fullname" autoComplete="off" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="candidate_email">Email</label>
                        </div>
                        <div className="col-75">
                            <input type="text" name="candidate_email" id="candidate_email" placeholder="Enter your email" autoComplete="off" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="candidate_dob">Date of Birth</label>
                        </div>
                        <div className="col-75">
                            <input type="date" name="candidate_dob" id="candidate_dob" autoComplete="off" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="candidate_phone">Phone Number</label>
                        </div>
                        <div className="col-75">
                            <input type="text" name="candidate_phone" id="candidate_phone" placeholder="Enter your phone number" autoComplete="off"/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="candidate_tech">Select Technology</label>
                        </div>
                        <div className="col-75">
                            <select onChange={handleChange} name="candidate_tech" id="candidate_tech">
                                
                                <option value="plz_select">Please Select</option>
                                <option value="HTML">HTML</option>
                                <option value="CSS">CSS</option>
                                <option value="JavaScript">JavaScript</option>
                                <option value="Angular">Angular</option>
                                
                            </select>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="candidate_comp">Select Competency</label>
                        </div>
                        <div className="col-75">
                            <select onChange={handleChange} name="candidate_comp" id="candidate_comp">
                                 <option value="plz_select">Please Select</option>
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