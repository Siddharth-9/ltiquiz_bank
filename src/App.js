import React from "react"
import { Routes, Route } from "react-router-dom";
import Userdata from "./MyComponents/Userdata"
import Questions from "./MyComponents/Questions"
import Userform  from "./MyComponents/Userform"


function App() {
  return (
    <React.StrictMode>
      <Routes>
        <Route path ="/" element={<Userdata />} />
        <Route exact path ="/questions" element={<Questions />}/>
        <Route exath path ="/result_page" element={<Userform/>}/>
      </Routes>
    </React.StrictMode>
  );
}

export default App;
